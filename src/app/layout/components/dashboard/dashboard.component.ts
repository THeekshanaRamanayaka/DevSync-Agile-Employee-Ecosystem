import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CalendarComponent } from '../../../shared/components/common/calendar/calendar.component';
import { ChartComponent } from '../../../shared/components/common/chart/chart.component';
import { CardsComponent } from '../../../shared/components/common/cards/cards.component';
import { JobLevelsComponent } from "../../../shared/components/common/job-levels/job-levels.component";
import { MaritualStatusComponent } from "../../../shared/components/common/maritual-status/maritual-status.component";
import { TableComponent } from "../../../shared/components/common/table/table.component";
import { MeetingsComponent } from '../../../shared/components/common/meetings/meetings.component';
import { DashPageComponent } from "../dash-page/dash-page.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, CalendarComponent, MeetingsComponent, DashPageComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
}