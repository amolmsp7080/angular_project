import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { filter, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));

  ngOnInit() {
    this.from_demo();
    this.interval_demo();
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsObs = from(cars);
    carsObs.subscribe({
      next: (car) => console.log('Next car is: ', car),
      error: (err) => console.log('Error: ', err),
      complete: () => console.log('All data received'),
    });
  }

  num_publisher: any;
  even_num_publisher: any;
  square_num_publisher: any;

  interval_demo() {
    this.num_publisher = interval(1000);
    this.even_num_publisher = this.num_publisher.pipe(filter((val: any) => val % 2 === 0));
    this.square_num_publisher = this.num_publisher.pipe(map((val: any) => val * val));
    // this.num_publisher.subscribe((val: any) => console.log('Value: ', val));
  }
}
