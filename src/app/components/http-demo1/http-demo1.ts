import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  user_api_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {} // Dependency Injection

  ngOnInit() {
    this.fetch_data_javascript();
    this.fetch_data_angular();
  }

  fetch_data_javascript() {
    // fetch() returns Promise, then() is used with promise
    fetch(this.user_api_url).then((response) => {
      response.json().then((finalResponse) => {
        console.log(finalResponse);
      });
    });
  }

  fetch_data_angular() {
    // httpClient.get() returns Observable, subscribe() is used with observable
    this.httpClient.get(this.user_api_url).subscribe((response) => {
      console.log(response);
    });
  }
}
