import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DropdownItem {
  label: string;
  link: string;
  action?: () => void;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  isOpen = false;
  buttonText = 'Department';
  
  menuItems: DropdownItem[] = [
    { label: 'Human Resource', link: '#', action: () => this.handleDashboard() },
    { label: 'Software Development', link: '#', action: () => this.handleSettings() },
    { label: 'Finance', link: '#', action: () => this.handleEarnings() },
  ];

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }

  handleItemClick(item: DropdownItem): void {
    if (item.action) {
      item.action();
    }
    this.closeDropdown();
  }

  private handleDashboard(): void {
    console.log('Navigate to Dashboard');
    // Add your dashboard navigation logic here
  }

  private handleSettings(): void {
    console.log('Navigate to Settings');
    // Add your settings navigation logic here
  }

  private handleEarnings(): void {
    console.log('Navigate to Earnings');
    // Add your earnings navigation logic here
  }
}
