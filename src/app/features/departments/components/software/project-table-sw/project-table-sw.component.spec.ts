import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTableSwComponent } from './project-table-sw.component';

describe('ProjectTableSwComponent', () => {
  let component: ProjectTableSwComponent;
  let fixture: ComponentFixture<ProjectTableSwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTableSwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTableSwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
