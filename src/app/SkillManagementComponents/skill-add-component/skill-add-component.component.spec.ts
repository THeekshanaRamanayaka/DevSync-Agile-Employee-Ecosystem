import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAddComponentComponent } from './skill-add-component.component';

describe('SkillAddComponentComponent', () => {
  let component: SkillAddComponentComponent;
  let fixture: ComponentFixture<SkillAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillAddComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
