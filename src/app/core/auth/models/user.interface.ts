export interface User {
    employeeId: string;
    employeeName: string;
    role: UserRole;
    position: string;
    contactNumber: string;
    address: string;
    city: string;
    gender: string;
    marriedStatus: string;
    status: string;
    joinDate: Date;
    department: Department;
    email: string;
}

export enum UserRole {
    Admin = 'Admin',
    manager = 'Manager',
    employee = 'Employee'
  }
  
  export enum Department {
    SOFTWARE_DEVELOPMENT = 'SOFTWARE DEVELOPMENT',
    HR = 'HR',
    FINANCE = 'FINANCE'
  }
  
  export interface Position {
    SOFTWARE_DEVELOPMENT: ['Developer', 'QA Engineer', 'UX Designer'];
    HR: ['HR Officer', 'Recruiter', 'Training Coordinator'];
    FINANCE: ['Accountant', 'Financial Analyst', 'Payroll Specialist'];
  }