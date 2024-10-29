import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportComponentComponent } from './employee-report-component.component';

describe('EmployeeReportComponentComponent', () => {
  let component: EmployeeReportComponentComponent;
  let fixture: ComponentFixture<EmployeeReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeReportComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
