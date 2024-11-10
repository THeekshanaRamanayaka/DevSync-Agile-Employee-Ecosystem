import { Component } from '@angular/core';
import { CardsComponent } from '../../../shared/components/common/cards/cards.component';
import { JobLevelsComponent } from '../../../shared/components/common/job-levels/job-levels.component';
import { ChartComponent } from '../../../shared/components/common/chart/chart.component';
import { TableComponent } from '../../../shared/components/common/table/table.component';
import { TaskCompletedComponent } from "../../../shared/components/common/task-completed/task-completed.component";

@Component({
  selector: 'app-dash-page',
  standalone: true,
  imports: [CardsComponent, JobLevelsComponent, ChartComponent, TableComponent, TaskCompletedComponent],
  templateUrl: './dash-page.component.html',
  styleUrl: './dash-page.component.css'
})
export class DashPageComponent {

}
