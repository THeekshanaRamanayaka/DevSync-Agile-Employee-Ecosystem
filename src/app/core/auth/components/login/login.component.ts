import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../../models/auth-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.error = null;

      const { email, password } = this.loginForm.value;
      
      this.authService.login(email, password).subscribe({
        next: (response: AuthResponse) => {
          console.log('Login successful:', response);
          this.isLoading = false;
          // Let AuthService handle navigation based on role
        },
        error: (error) => {
          console.error('Login error:', error);
          this.isLoading = false;
          this.error = error.error?.message || 'An error occurred during login';
        }
      });
    }
  }
}
