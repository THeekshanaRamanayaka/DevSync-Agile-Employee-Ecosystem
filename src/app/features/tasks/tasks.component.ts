import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksCreateComponent } from './components/tasks-create/tasks-create.component';

interface Tab {
  id: string;
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tabs: Tab[] = [
    {
      id: 'tasks',
      title: 'Tasks',
      component: TasksListComponent
    },
    {
      id: 'add-task',
      title: 'Add Task',
      component: TasksCreateComponent
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

}
