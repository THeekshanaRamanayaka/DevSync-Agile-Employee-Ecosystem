export interface EmployeeInterface {
    employeeId: string;
    name: string;
    department: string;
    role: string;
    position: string;
    contactNumber: string;
    joinDate: Date;
    status: 'active' | 'inactive';
    email: string;
    password: string;
}
