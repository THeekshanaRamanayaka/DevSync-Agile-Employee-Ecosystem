import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssignmentComponentComponent } from './project-assignment-component.component';

describe('ProjectAssignmentComponentComponent', () => {
  let component: ProjectAssignmentComponentComponent;
  let fixture: ComponentFixture<ProjectAssignmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAssignmentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAssignmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
