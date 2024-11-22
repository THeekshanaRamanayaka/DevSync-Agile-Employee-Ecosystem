import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeInterface } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {
  @Input() isOpen = false;
  @Input() employeeData: Partial<EmployeeInterface> = {};
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Partial<EmployeeInterface>>();

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.save.emit(this.employeeData);
  }
}
