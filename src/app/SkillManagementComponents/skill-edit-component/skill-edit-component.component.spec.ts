import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEditComponentComponent } from './skill-edit-component.component';

describe('SkillEditComponentComponent', () => {
  let component: SkillEditComponentComponent;
  let fixture: ComponentFixture<SkillEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillEditComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
