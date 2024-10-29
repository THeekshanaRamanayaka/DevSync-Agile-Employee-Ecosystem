import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReportComponentComponent } from './project-report-component.component';

describe('ProjectReportComponentComponent', () => {
  let component: ProjectReportComponentComponent;
  let fixture: ComponentFixture<ProjectReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectReportComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
