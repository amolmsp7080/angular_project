import { CanActivateFn } from '@angular/router';
import { UserRoleService } from '../services/user-role-service';
import { inject } from '@angular/core';

export const uploadvideoGuard: CanActivateFn = (route, state) => {
  let userRoleService = inject(UserRoleService);
  if (userRoleService.getUserRole() === 'trainer') {
    return true;
  } else {
    alert('Sorry, You Dont have Access to this page!!!')
    return false;
  }
};
