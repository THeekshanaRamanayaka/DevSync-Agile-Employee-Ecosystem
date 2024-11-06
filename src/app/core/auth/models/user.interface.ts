export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    department: Department;
    position: string;
}

export enum UserRole {
    Admin = 'Admin',
    manager = 'manager',
    employee = 'employee'
  }
  
  export enum Department {
    SOFTWARE_DEVELOPMENT = 'SOFTWARE_DEVELOPMENT',
    HR = 'HR',
    FINANCE = 'FINANCE'
  }
  
  export interface Position {
    SOFTWARE_DEVELOPMENT: ['Developer', 'QA Engineer', 'UX Designer'];
    HR: ['HR Officer', 'Recruiter', 'Training Coordinator'];
    FINANCE: ['Accountant', 'Financial Analyst', 'Payroll Specialist'];
  }