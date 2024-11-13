import { Component, Type } from '@angular/core';
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectCreateComponent } from "./components/project-create/project-create.component";
import { CommonModule } from '@angular/common';

interface Tab {
  id: string;
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  tabs: Tab[] = [
    {
      id: 'projects',
      title: 'Projects',
      component: ProjectListComponent
    },
    {
      id: 'add-project',
      title: 'Add Project',
      component: ProjectCreateComponent
    },
    // {
    //   id: 'tasks',
    //   title: 'Tasks',
    //   component: TasksComponent
    // }
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
