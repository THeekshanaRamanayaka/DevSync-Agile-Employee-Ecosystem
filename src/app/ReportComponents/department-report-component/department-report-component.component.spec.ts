import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentReportComponentComponent } from './department-report-component.component';

describe('DepartmentReportComponentComponent', () => {
  let component: DepartmentReportComponentComponent;
  let fixture: ComponentFixture<DepartmentReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentReportComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
