import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  userRole = 'student';

  getUserRole() {
    return this.userRole;
  }
}
