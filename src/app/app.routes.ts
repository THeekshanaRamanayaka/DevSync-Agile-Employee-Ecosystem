import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { RoleGuard } from './core/auth/guards/role.guard';
import { UserRole } from './core/auth/models/user.interface';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
        path: 'admin',
        canActivate: [AuthGuard, RoleGuard],
        data: { role: UserRole.SYSTEM_ADMIN },
        loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'manager',
        canActivate: [AuthGuard, RoleGuard],
        data: { role: UserRole.DEPARTMENT_MANAGER },
        loadChildren: () => import('./features/manager/manager.module').then(m => m.ManagerModule)
    },
    {
        path: 'employee',
        canActivate: [AuthGuard, RoleGuard],
        data: { role: UserRole.EMPLOYEE },
        loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule)
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
