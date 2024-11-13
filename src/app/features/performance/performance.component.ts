import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCreateComponent } from './components/review-create/review-create.component';

interface Tab {
  id: string;
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css'
})
export class PerformanceComponent {
  tabs: Tab[] = [
    {
      id: 'performance',
      title: 'Performance',
      component: ReviewListComponent
    },
    {
      id: 'add-review',
      title: 'Add Review',
      component: ReviewCreateComponent
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
