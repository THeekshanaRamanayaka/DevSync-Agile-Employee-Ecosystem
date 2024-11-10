import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSwPfComponent } from './table-sw-pf.component';

describe('TableSwPfComponent', () => {
  let component: TableSwPfComponent;
  let fixture: ComponentFixture<TableSwPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSwPfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSwPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
