import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillsComponentComponent } from './employee-skills-component.component';

describe('EmployeeSkillsComponentComponent', () => {
  let component: EmployeeSkillsComponentComponent;
  let fixture: ComponentFixture<EmployeeSkillsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSkillsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSkillsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
