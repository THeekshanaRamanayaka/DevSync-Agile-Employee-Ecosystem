import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAssignmentComponent } from './tasks-assignment.component';

describe('TasksAssignmentComponent', () => {
  let component: TasksAssignmentComponent;
  let fixture: ComponentFixture<TasksAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
