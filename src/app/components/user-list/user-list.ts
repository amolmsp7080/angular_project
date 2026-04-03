import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  user_api_url = 'https://jsonplaceholder.typicode.com/users';
  httpClient = inject(HttpClient);
  userData: Observable<any> | undefined;

  ngOnInit() {
    this.userData = this.httpClient.get(this.user_api_url);
  }
}
