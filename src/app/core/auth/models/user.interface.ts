export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
  HR = 'HR'
}

export interface User {
  employeeId: string;
  employeeName: string;
  email: string;
  role: UserRole;
  department?: string;
}