import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDashboardComponentComponent } from './report-dashboard-component.component';

describe('ReportDashboardComponentComponent', () => {
  let component: ReportDashboardComponentComponent;
  let fixture: ComponentFixture<ReportDashboardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportDashboardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
