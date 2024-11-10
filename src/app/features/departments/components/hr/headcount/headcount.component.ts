import { Component } from '@angular/core';
import { JobLevelsComponent } from '../../../../../shared/components/common/job-levels/job-levels.component';
import { MaritualStatusComponent } from '../../../../../shared/components/common/maritual-status/maritual-status.component';

@Component({
  selector: 'app-headcount',
  standalone: true,
  imports: [JobLevelsComponent, MaritualStatusComponent,],
  templateUrl: './headcount.component.html',
  styleUrl: './headcount.component.css'
})
export class HeadcountComponent {

}
