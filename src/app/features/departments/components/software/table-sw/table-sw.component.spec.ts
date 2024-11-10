import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSwComponent } from './table-sw.component';

describe('TableSwComponent', () => {
  let component: TableSwComponent;
  let fixture: ComponentFixture<TableSwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
