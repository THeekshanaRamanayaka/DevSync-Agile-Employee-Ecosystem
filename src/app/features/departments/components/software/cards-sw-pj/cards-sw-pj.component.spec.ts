import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSwPjComponent } from './cards-sw-pj.component';

describe('CardsSwPjComponent', () => {
  let component: CardsSwPjComponent;
  let fixture: ComponentFixture<CardsSwPjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSwPjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsSwPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
