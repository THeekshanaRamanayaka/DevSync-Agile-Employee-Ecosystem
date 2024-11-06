import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritualStatusComponent } from './maritual-status.component';

describe('MaritualStatusComponent', () => {
  let component: MaritualStatusComponent;
  let fixture: ComponentFixture<MaritualStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaritualStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritualStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
