import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserRole } from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.authService.getCurrentUser();
    const requiredRole = route.data['role'] as UserRole;

    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }

    if (user.role === requiredRole) {
      return true;
    }

    this.authService.redirectBasedOnRole(user);
    return false;
  }
}
