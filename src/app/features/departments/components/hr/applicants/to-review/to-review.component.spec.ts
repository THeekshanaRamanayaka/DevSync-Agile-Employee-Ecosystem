import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToReviewComponent } from './to-review.component';

describe('ToReviewComponent', () => {
  let component: ToReviewComponent;
  let fixture: ComponentFixture<ToReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
