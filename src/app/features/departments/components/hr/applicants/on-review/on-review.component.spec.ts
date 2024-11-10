import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnReviewComponent } from './on-review.component';

describe('OnReviewComponent', () => {
  let component: OnReviewComponent;
  let fixture: ComponentFixture<OnReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
