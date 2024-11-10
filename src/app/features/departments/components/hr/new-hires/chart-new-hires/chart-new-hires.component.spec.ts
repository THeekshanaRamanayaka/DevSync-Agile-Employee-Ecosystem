import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNewHiresComponent } from './chart-new-hires.component';

describe('ChartNewHiresComponent', () => {
  let component: ChartNewHiresComponent;
  let fixture: ComponentFixture<ChartNewHiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartNewHiresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartNewHiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
