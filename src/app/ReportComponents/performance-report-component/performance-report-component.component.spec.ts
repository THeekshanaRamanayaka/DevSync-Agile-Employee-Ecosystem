import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReportComponentComponent } from './performance-report-component.component';

describe('PerformanceReportComponentComponent', () => {
  let component: PerformanceReportComponentComponent;
  let fixture: ComponentFixture<PerformanceReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceReportComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
