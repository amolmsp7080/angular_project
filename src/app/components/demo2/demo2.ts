import { MathService } from './../../services/math-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.css',
})
export class Demo2 {
  mathService = inject(MathService); // Dependency Injection

  ngOnInit() {
    console.log('Demo-2 ngOnInit');
    console.log(this.mathService.indexOfMax([20, 10, 50, 40, 30]));
  }
  ngOnDestroy() {
    console.log('Demo-2 ngOnDestroy');
  }
}
