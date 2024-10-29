import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillReportComponentComponent } from './skill-report-component.component';

describe('SkillReportComponentComponent', () => {
  let component: SkillReportComponentComponent;
  let fixture: ComponentFixture<SkillReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillReportComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
