import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';

interface Tab {
  id: string;
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  tabs: Tab[] = [
    {
      id: 'employees',
      title: 'Employees List',
      component: EmployeeListComponent
    },
    {
      id: 'add-employee',
      title: 'Add Employee',
      component: EmployeeCreateComponent
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

    return `${baseClasses} ${this.selectedTabId === tabId ? activeClasses : inactiveClasses
      }`;
  }

}
