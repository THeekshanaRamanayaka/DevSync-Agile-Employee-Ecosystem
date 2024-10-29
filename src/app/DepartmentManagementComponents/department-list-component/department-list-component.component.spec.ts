import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListComponentComponent } from './department-list-component.component';

describe('DepartmentListComponentComponent', () => {
  let component: DepartmentListComponentComponent;
  let fixture: ComponentFixture<DepartmentListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
