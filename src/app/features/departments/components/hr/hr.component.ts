import { Component, Type } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeadcountComponent } from './headcount/headcount.component';
import { NewHiresComponent } from './new-hires/new-hires.component';
import { ApplicantsComponent } from './applicants/applicants.component';

interface Tab {
  id: string;
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hr.component.html',
  styleUrl: './hr.component.css'
})
export class HRComponent {
  tabs: Tab[] = [
    {
      id: 'headcount',
      title: 'Headcount',
      component: HeadcountComponent
    },
    {
      id: 'new-hires',
      title: 'New Hires',
      component: NewHiresComponent
    },
    {
      id: 'applicants',
      title: 'Applicants',
      component: ApplicantsComponent
    }
  ]

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
