import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8080';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password:string): Observable<any>{

    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password },
      {responseType: 'text' as 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    ).pipe(
      tap( user => {
        console.log(user);
      })
    );
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  redirectBasedOnRole(user: User): void {
    switch (user.role) {
      case 'SYSTEM_ADMIN':
        this.router.navigate(['/admin/dashboard']);
        break;
      case 'DEPARTMENT_MANAGER':
        this.router.navigate([`/manager/${user.department.toLowerCase()}/dashboard`]);
        break;
      default:
        this.router.navigate(['/employee/dashboard']);
    }
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}
