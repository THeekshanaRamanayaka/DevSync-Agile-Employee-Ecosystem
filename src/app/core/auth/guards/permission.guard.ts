import { CanDeactivateFn } from '@angular/router';

export const permissionGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
