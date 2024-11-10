import { Component } from '@angular/core';
import { CardsSwPjComponent } from "./cards-sw-pj/cards-sw-pj.component";
import { TableSwComponent } from "./table-sw/table-sw.component";
import { TableSwPfComponent } from "./table-sw-pf/table-sw-pf.component";
import { ProjectTableSwComponent } from "./project-table-sw/project-table-sw.component";

@Component({
  selector: 'app-software',
  standalone: true,
  imports: [CardsSwPjComponent, TableSwComponent, TableSwPfComponent, ProjectTableSwComponent],
  templateUrl: './software.component.html',
  styleUrl: './software.component.css'
})
export class SoftwareComponent {

}
