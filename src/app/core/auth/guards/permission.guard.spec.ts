import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { permissionGuard } from './permission.guard';

describe('permissionGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => permissionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
