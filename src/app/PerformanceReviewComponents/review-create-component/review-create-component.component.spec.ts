import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCreateComponentComponent } from './review-create-component.component';

describe('ReviewCreateComponentComponent', () => {
  let component: ReviewCreateComponentComponent;
  let fixture: ComponentFixture<ReviewCreateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewCreateComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
