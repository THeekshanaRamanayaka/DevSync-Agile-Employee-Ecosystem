import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { RoleGuard } from './core/auth/guards/role.guard';
import { UserRole } from './core/auth/models/user.interface';
import { AdminComponent } from './features/admin/admin.component';
import { EmployeesComponent } from './features/employees/employees.component';
import { ManagerComponent } from './features/manager/manager.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { DepartmentsComponent } from './features/departments/departments.component';
import { DashPageComponent } from './layout/components/dash-page/dash-page.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { PerformanceComponent } from './features/performance/performance.component';
import { ReportsComponent } from './features/reports/reports.component';
import { ProfileComponent } from './core/auth/components/profile/profile.component';
import { ReviewCreateComponent } from './features/performance/components/review-create/review-create.component';
import { ReviewEditComponent } from './features/performance/components/review-edit/review-edit.component';
import { ReviewListComponent } from './features/performance/components/review-list/review-list.component';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: UserRole.ADMIN },
        children: [
            {
                path: 'dashboard',
                component: DashPageComponent
            },
            {
                path: 'department',
                component: DepartmentsComponent
            },
            {
                path: 'employee',
                component: EmployeesComponent
            },
            {
                path: 'skill',
                component: SkillsComponent
            },
            {
                path: 'project',
                component: ProjectsComponent
            },
            {
                path: 'performance',
                component: PerformanceComponent,
                children: [
                    {
                        path: 'create',
                        component: ReviewCreateComponent
                    },
                    {
                        path: 'edit/:id',
                        component: ReviewEditComponent
                    },
                    {
                        path: '',
                        component: ReviewListComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
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
        data: { role: UserRole.MANAGER },
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
        data: { role: UserRole.USER }, // Changed from UserRole.employee to UserRole.USER
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { role: UserRole.USER }
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