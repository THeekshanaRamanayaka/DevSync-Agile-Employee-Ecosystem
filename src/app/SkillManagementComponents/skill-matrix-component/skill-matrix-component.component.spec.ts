import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMatrixComponentComponent } from './skill-matrix-component.component';

describe('SkillMatrixComponentComponent', () => {
  let component: SkillMatrixComponentComponent;
  let fixture: ComponentFixture<SkillMatrixComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillMatrixComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMatrixComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
