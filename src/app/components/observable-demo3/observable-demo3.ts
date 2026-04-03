import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { exhaustMap, fromEvent, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './observable-demo3.html',
  styleUrl: './observable-demo3.css',
})
export class ObservableDemo3 {
  searchResult$: Observable<any> | undefined;
  searchForm: any;

  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl(),
    });
  }
  ngOnInit() {
    // this.searchResult$ = this.searchForm.get('searchField').valueChanges.pipe(
    //   switchMap((term) => this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)),
    //   map((response: any) => (response.users.length > 0 ? response.users : [])),
    // );
    this.searchForm.get('searchField').valueChanges.subscribe((term: any) => {
      this.searchResult$ = this.http
        .get<any>(`https://dummyjson.com/users/search?q=${term}`)
        .pipe(map((response) => (response.users.length > 0 ? response.users : [])));
    });
  }

  // =====================Exhaustmap code after this line
  @ViewChild('loginBtn') loginBtn!: ElementRef;

  ngAfterViewInit() {
    /* fromEvent(this.loginBtn.nativeElement, 'click').subscribe(() => {
      this.http.get('https://httpbin.org/delay/5').subscribe((response) => {
        console.log('Login Success',response);
      });
    }); */

    fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap((val) => {
      return this.http.get('https://httpbin.org/delay/5')
    })).subscribe({
      next: (res) => console.log('Response:', res),
      error: (err) => console.error('Error:', err),
    })
  }
}
