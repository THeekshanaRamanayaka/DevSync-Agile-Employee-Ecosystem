import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeInterface } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm!: FormGroup;
  departments = [
    { id: '1', name: 'SOFTWARE DEVELOPMENT' },
    { id: '2', name: 'HR' },
    { id: '3', name: 'Finance' }
  ];
  roles = ['Developer', 'Employee', 'Manager', 'Admin'];
  positions = ['Developer', 'QA Engineer', 'UX Designer', 'HR Officer', 'Recruiter', 'Training Coordinator', 'Accountant', 'Financial Analyst', 'Payroll Specialist'];
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.employeeForm = this.fb.group({
      employeeName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      role: ['', Validators.required],
      position: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      marriedStatus: ['', Validators.required],
      status: ['Active', Validators.required],
      joinDate: ['', Validators.required],
      departmentId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {}

  // generateEmployeeId(): void {
  //   this.employeeService.generateEmployeeId().subscribe({
  //     next: (res: any) => {
  //       const id = res.data;
  //       console.log('Generated ID:', id);
  //       // const paddedId = id < 10 ? `0000${id}` :
  //       //     id < 100 ? `000${id}` :
  //       //     id < 1000 ? `00${id}` :
  //       //     id < 10000 ? `0${id}` : `${id}`;
  //       // const formattedId = `EMP${paddedId}`;
  //       this.employeeForm.get('employeeId')?.setValue(id);
  //     },
  //     error: (err: any) => {
  //       console.error('Error generating employee ID:', err);
  //     }
  //   });
  // }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.markFormGroupTouched(this.employeeForm);
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const formData = this.employeeForm.getRawValue();

    const employeeData: EmployeeInterface = {
      ...formData,
      joinDate: new Date(formData.joinDate).toISOString().split('T')[0],
      status: formData.status.charAt(0).toUpperCase() + formData.status.slice(1).toLowerCase(),
      gender: formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1).toLowerCase()
    }

    console.log('Sending data', employeeData);
    
    this.employeeService.createEmployee(employeeData).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        console.log('Employee created successfully:', response);
        this.employeeForm.reset();
      },
      error: (error: any) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || error.error?.error || 'Failed to create employee. Please try again.';
      }
    });
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}