import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup;
  departments = ['IT', 'HR', 'Finance', 'Marketing', 'Operations'];
  roles = ['Developer', 'Manager', 'Designer', 'Analyst', 'Administrator'];
  positions = ['Junior', 'Senior', 'Lead', 'Head'];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      employeeId: [{ value: this.generateEmployeeId(), disabled: true }],
      name: ['', [Validators.required, Validators.minLength(2)]],
      department: ['', Validators.required],
      role: ['', Validators.required],
      position: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      joinDate: ['', Validators.required],
      status: ['active', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')
      ]]
    });
  }

  ngOnInit(): void {}

  generateEmployeeId(): string {
    const prefix = 'EMP';
    const timestamp = new Date().getTime().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form submitted:', this.employeeForm.getRawValue());
      // Add your API call here to save the employee data
    } else {
      this.markFormGroupTouched(this.employeeForm);
    }
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
