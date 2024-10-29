import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBadgeComponentComponent } from './skill-badge-component.component';

describe('SkillBadgeComponentComponent', () => {
  let component: SkillBadgeComponentComponent;
  let fixture: ComponentFixture<SkillBadgeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillBadgeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillBadgeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
