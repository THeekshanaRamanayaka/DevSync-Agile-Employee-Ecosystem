import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardComponentComponent } from './project-card-component.component';

describe('ProjectCardComponentComponent', () => {
  let component: ProjectCardComponentComponent;
  let fixture: ComponentFixture<ProjectCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
