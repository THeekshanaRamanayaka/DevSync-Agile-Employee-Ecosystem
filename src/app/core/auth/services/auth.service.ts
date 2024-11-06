import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User, UserRole } from '../models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static logout() {
    throw new Error('Method not implemented.');
  }
  private readonly apiUrl = 'http://localhost:8080';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    const user = localStorage.getItem('currentUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.currentUserSubject.next(parsedUser);
    }
  }

  login(email: string, password:string): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/auth/login`, { email, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    ).pipe(
      tap( user => {
        const userObj = typeof user === 'string' ? JSON.parse(user) : user;
        this.currentUserSubject.next(userObj);
        localStorage.setItem('currentUser', JSON.stringify(userObj));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  redirectBasedOnRole(user: User): void {
    switch (user.role) {
      case UserRole.Admin:
        this.router.navigate(['admin']); // Fixed path to lowercase
        break;
      case UserRole.manager:
        this.router.navigate([`/manager/${user.department.toLowerCase()}`]);
        break;
      case UserRole.employee:
        this.router.navigate(['/employee']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }


  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}
