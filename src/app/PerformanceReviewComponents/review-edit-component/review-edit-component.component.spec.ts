import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewEditComponentComponent } from './review-edit-component.component';

describe('ReviewEditComponentComponent', () => {
  let component: ReviewEditComponentComponent;
  let fixture: ComponentFixture<ReviewEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewEditComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
