import { Component } from '@angular/core';
import { ChartComponent } from "../../../../../shared/components/common/chart/chart.component";
import { ChartNewHiresComponent } from "./chart-new-hires/chart-new-hires.component";

@Component({
  selector: 'app-new-hires',
  standalone: true,
  imports: [ChartComponent, ChartNewHiresComponent],
  templateUrl: './new-hires.component.html',
  styleUrl: './new-hires.component.css'
})
export class NewHiresComponent {

}
