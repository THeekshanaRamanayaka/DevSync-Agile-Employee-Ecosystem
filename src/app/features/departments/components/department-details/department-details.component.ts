import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableComponent } from "../../../../shared/components/common/table/table.component";
import { DepartmentPerformanceComponent } from "../../../../shared/components/common/department-performance/department-performance.component";
import { DepartmentsComponent } from '../../departments.component';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [RouterLink, TableComponent, DepartmentPerformanceComponent],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
  
  constructor(
    private departments: DepartmentsComponent
  ) {
    
  }
  addDepartment(): void {
    // Implement add department logic here
    console.log('Add department clicked');
    this.departments.addDepartment();
  }
}
