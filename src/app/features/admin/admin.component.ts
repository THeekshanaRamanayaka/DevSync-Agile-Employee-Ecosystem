import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { DashboardComponent } from '../../layout/components/dashboard/dashboard.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, SidebarComponent, DashboardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}