import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToReviewComponent } from './to-review/to-review.component';
import { OnReviewComponent } from './on-review/on-review.component';
import { ReviewedComponent } from './reviewed/reviewed.component';

interface Tab {
  id: string;
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'app-applicants',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.css'
})
export class ApplicantsComponent {
  tabs: Tab[] = [
    {
      id: 'To-Review',
      title: 'To Review',
      component: ToReviewComponent
    },
    {
      id: 'On-Review',
      title: 'Interview',
      component: OnReviewComponent
    },
    {
      id: 'Completed',
      title: 'Decisions',
      component: ReviewedComponent
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
