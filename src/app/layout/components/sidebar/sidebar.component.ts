import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../../core/auth/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
[x: string]: any;
  isSidebarOpen: boolean = false;
  public selectedTab: string = 'Dashboard';

  constructor(
    private authService: AuthService
  ) {}

  public changeSelectedHeader(menuName:string) {
    this.selectedTab = menuName
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout(): void {
    this.authService.logout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth >= 1024) {
      this.isSidebarOpen = true;
    } else {
      this.isSidebarOpen = false;
    }
  }
}
