import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { RoleGuard } from './core/auth/guards/role.guard';
import { UserRole } from './core/auth/models/user.interface';
import { AdminComponent } from './features/admin/admin.component';
import { EmployeesComponent } from './features/employees/employees.component';
import { ManagerComponent } from './features/manager/manager.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: UserRole.Admin },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]

    },
    {
        path: 'manager/:department', // Added department parameter
        component: ManagerComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: UserRole.manager },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'employee',
        component: EmployeesComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: UserRole.employee },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        redirectTo: 'login' 
    }
];