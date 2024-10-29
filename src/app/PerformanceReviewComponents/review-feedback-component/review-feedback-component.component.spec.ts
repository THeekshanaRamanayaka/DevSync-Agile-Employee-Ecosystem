import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFeedbackComponentComponent } from './review-feedback-component.component';

describe('ReviewFeedbackComponentComponent', () => {
  let component: ReviewFeedbackComponentComponent;
  let fixture: ComponentFixture<ReviewFeedbackComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewFeedbackComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewFeedbackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
