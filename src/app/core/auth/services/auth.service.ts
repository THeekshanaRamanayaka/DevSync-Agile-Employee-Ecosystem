import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User, UserRole } from '../models/user.interface';
import { Router } from '@angular/router';
import { AuthResponse } from '../models/auth-response';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8080';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    const token = this.tokenService.getToken();
    const user = this.getUserFromStorage();
    if (token && user) {
      this.currentUserSubject.next(user);
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((response: AuthResponse) => {
          console.log('Auth response:', response);
          if (response && response.token) {
            this.tokenService.setToken(response.token);
            const user: User = this.mapResponseToUser(response.user);
            this.currentUserSubject.next(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.navigateBasedOnRole(user);
          } else {
            console.error('Invalid response format:', response);
          }
        })
      );
  }

  private mapResponseToUser(responseUser: any): User {
    return {
      employeeId: responseUser.id.toString(),
      employeeName: `${responseUser.firstName} ${responseUser.lastName}`,
      email: responseUser.email,
      role: responseUser.role.toUpperCase() as UserRole,
      department: responseUser.department
    };
  }

  logout(): void {
    this.tokenService.removeToken();
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  public navigateBasedOnRole(user: User): void {
    console.log('Navigating based on role:', user.role);
    switch (user.role) {
      case UserRole.ADMIN:
        this.router.navigate(['/admin/dashboard']);
        break;
      case UserRole.MANAGER:
        this.router.navigate(['/manager/dashboard']);
        break;
      case UserRole.USER:
        this.router.navigate(['/dashboard']);
        break;
      case UserRole.HR:
        this.router.navigate(['/hr/dashboard']);
        break;
      default:
        console.log('Unknown role, navigating to dashboard');
        this.router.navigate(['/dashboard']);
    }
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  private getUserFromStorage(): User | null {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  }
}
