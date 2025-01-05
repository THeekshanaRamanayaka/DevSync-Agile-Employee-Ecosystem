import { HttpInterceptorFn, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();
  
  // Log full request details
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);
  console.log('Request Body:', req.body);

  // Clone request with updated headers
  const modifiedReq = req.clone({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // Only add Authorization if it's not a login request
      ...(token && !req.url.includes('/login') ? { 'Authorization': `Bearer ${token}` } : {})
    }),
    withCredentials: true // Include cookies if your backend uses them
  });

  return next(modifiedReq).pipe(
    catchError(error => {
      console.error('HTTP Error:', error);
      return throwError(() => error);
    })
  );
};
