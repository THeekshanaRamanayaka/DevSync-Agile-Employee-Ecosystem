import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditComponentComponent } from './department-edit-component.component';

describe('DepartmentEditComponentComponent', () => {
  let component: DepartmentEditComponentComponent;
  let fixture: ComponentFixture<DepartmentEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentEditComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
