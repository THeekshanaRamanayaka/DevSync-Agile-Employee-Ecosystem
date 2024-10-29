import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDetailsComponentComponent } from './review-details-component.component';

describe('ReviewDetailsComponentComponent', () => {
  let component: ReviewDetailsComponentComponent;
  let fixture: ComponentFixture<ReviewDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
