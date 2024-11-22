import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';

interface SearchCriteria {
  employeeId: string;
  employeeName: string;
  role: string;
  position: string;
  contactNumber: string;
  address: string;
  city: string;
  gender: string;
  marriedStatus: string;
  status: string;
  joinDate: string;
  department: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeEditComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  public employeeList: any[] = [];
  public filteredEmployeeList: any[] = [];
  public searchCriteria: SearchCriteria = {
    employeeId: '',
    employeeName: '',
    role: '',
    position: '',
    contactNumber: '',
    address: '',
    city: '',
    gender: '',
    marriedStatus: '',
    status: '',
    joinDate: '',
    department: ''
  };

  private departmentMap: { [key: string]: string } = {
    '1': 'SOFTWARE DEVELOPMENT',
    '2': 'HR',
    '3': 'FINANCE'
  };

  departments = [
    { value: '', label: 'All Departments' },
    { value: 'SOFTWARE DEVELOPMENT', label: 'Software Development' },
    { value: 'HR', label: 'HR' },
    { value: 'FINANCE', label: 'Finance' }
  ];

  isModelOpen = false;
  selectedEmployee: any = null;
  showDeleteConfirmation = false;
  employeeToDelete: any = null;

  constructor(
    private employeeService: EmployeeService
  ) {
    this.loadTable();
  }

  loadTable() {
    this.employeeService.getEmployeeList().subscribe({
      next: (response: any) => {
        this.employeeList = response.data.map((employee: any) => ({
          ...employee,
          formattedEmployeeId: this.formatEmployeeId(employee.employeeId),
          department: this.getDepartmentName(employee.departmentId),
        }));
        this.filteredEmployeeList = [...this.employeeList];
        console.log('Get employee list successfully', this.employeeList);
      },
      error: (error: any) => {
        console.error('Failed to get employee list', error);
      }
    });
  }

  private formatEmployeeId(id: number): string {
    return `EMP${id.toString().padStart(5, '0')}`;
  }

  private getDepartmentName(departmentId: string): string {
    return this.departmentMap[departmentId] || 'Unknown Department';
  }

  // Apply filters based on search criteria
  filterTable() {
    this.filteredEmployeeList = this.employeeList.filter(employee => {
      return Object.keys(this.searchCriteria).every(key => {
        const searchValue = this.searchCriteria[key as keyof SearchCriteria].toLowerCase();
        let employeeValue: string;

        if (key === 'employeeId') {
          employeeValue = employee.formattedEmployeeId.toLowerCase();
        } else {
          employeeValue = (employee[key]?.toString() || '').toLowerCase();
        }

        return !searchValue || employeeValue.includes(searchValue);
      });
    });
  }

  // Clear all filters
  clearFilters() {
    this.searchCriteria = {
      employeeId: '',
      employeeName: '',
      role: '',
      position: '',
      contactNumber: '',
      address: '',
      city: '',
      gender: '',
      marriedStatus: '',
      status: '',
      joinDate: '',
      department: ''
    };
    this.filterTable();
  }

  openUpdateModal(employee: any) {
    this.selectedEmployee = {
      employee_id: employee.employeeId,
      employeeName: employee.employeeName,
      role: employee.role,
      position: employee.position,
      contactNumber: employee.contactNumber,
      address: employee.address,
      city: employee.city,
      gender: employee.gender,
      marriedStatus: employee.marriedStatus,
      status: employee.status,
      joinDate: employee.joinDate,
      department: employee.department
    };
    this.isModelOpen = true;
    console.log('Opening modal with employee:', this.selectedEmployee);
  }

  closeModal() {
    this.isModelOpen = false;
    this.selectedEmployee = null;
  }

  handleUpdateEmployee(updatedEmployee: any) {
    console.log('Updating employee:', updatedEmployee);
    const employeeId = updatedEmployee.employee_id;
    this.employeeService.updateEmployee(employeeId, updatedEmployee).subscribe({
      next: (response) => {
        console.log('Employee updated successfully', response);
        this.loadTable();
        this.closeModal();
      },
      error: (error) => {
        console.error('Failed to update employee', error);
      }
    });
  }

  openDeleteConfirmation(employeeId: number) {
    this.employeeToDelete = employeeId;
    this.showDeleteConfirmation = true;
  }

  closeDeleteConfirmation() {
    this.showDeleteConfirmation = false;
    this.employeeToDelete = null;
  }

  confirmDelete() {
    if (this.employeeToDelete) {
      this.employeeService.deleteEmployee(this.employeeToDelete).subscribe({
        next: (response) => {
          console.log('Employee deleted successfully', response);
          this.loadTable();
          this.closeDeleteConfirmation();
        },
        error: (error) => {
          console.error('Failed to delete employee', error);
          this.closeDeleteConfirmation();
        }
      });
    }
  }
}