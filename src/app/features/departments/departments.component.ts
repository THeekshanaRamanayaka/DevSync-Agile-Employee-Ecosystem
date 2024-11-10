import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { SoftwareComponent } from './components/software/software.component';
import { HRComponent } from './components/hr/hr.component';
import { FinanceComponent } from './components/finance/finance.component';

interface Tab {
  id: string;
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
  static addDepartment(): void {
    throw new Error('Method not implemented.');
  }
  tabs: Tab[] = [
    {
      id: 'details',
      title: 'Departments',
      component: DepartmentDetailsComponent
    },
    {
      id: 'hr',
      title: 'HR',
      component: HRComponent
    },
    {
      id: 'software',
      title: 'Software Development',
      component: SoftwareComponent
    },
    {
      id: 'finance',
      title: 'Finance',
      component: FinanceComponent
    }
  ];

  selectedTabId = this.tabs[0].id;

  selectTab(tabId: string): void {
    this.selectedTabId = tabId;
  }

  getTabClasses(tabId: string): string {
    const baseClasses = 'inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm';
    const activeClasses = 'border-indigo-500 text-indigo-600';
    const inactiveClasses = 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';
    
    return `${baseClasses} ${
      this.selectedTabId === tabId ? activeClasses : inactiveClasses
    }`;
  }

  addDepartment(): void {
    // Implement add department logic here
    console.log('Add department clicked');
  }
}
