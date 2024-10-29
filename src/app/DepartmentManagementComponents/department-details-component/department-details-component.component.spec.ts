import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsComponentComponent } from './department-details-component.component';

describe('DepartmentDetailsComponentComponent', () => {
  let component: DepartmentDetailsComponentComponent;
  let fixture: ComponentFixture<DepartmentDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
