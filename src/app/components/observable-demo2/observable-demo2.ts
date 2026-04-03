import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  httpClient = inject(HttpClient);

  ngOnInit() {
    // this.forkjoin_demo();
    // this.mergeMap_demo();
    this.concatMap_demo();
  }

  forkjoin_demo() {
    let api_1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let api_2 = this.httpClient.get('https://jsonplaceholder.typicode.com/posts');

    forkJoin([api_1, api_2]).subscribe({
      next: (responseArr) => console.log(responseArr),
      error: (err) => console.log(err),
    });
  }

  mergeMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer
    userPublisher.pipe(
      mergeMap((user) => this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${user}`)), // nested
    ).subscribe(userDetails=>console.log(userDetails))
  }

  concatMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer
    userPublisher.pipe(
      concatMap((user) => this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${user}`)), // nested
    ).subscribe(userDetails=>console.log(userDetails))
  }
}
