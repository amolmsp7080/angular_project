import { MathService } from './../../services/math-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  constructor(private mathService: MathService) { // Dependency Injection
    console.log(this.mathService.sum([10,20,30,40,50]));
    console.log(this.mathService.average([10,20,30,40,50]));
  }

  timerId: number | undefined;
  ngOnInit() {
    this.timerId = setInterval(() => {
      console.log('I am Interval From Demo-1');
    }, 1000);

    console.log('Demo-1 ngOnInit');
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.timerId);
  }
}
