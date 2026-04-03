import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs: ['a', 'b', 'employee'],
  outputs: ['carsEvent'],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Child1 {
  a: any;
  b: any;
  employee: any;
  cars = ['Tata', 'Honda', 'maruti'];

  carsEvent = new EventEmitter();
  sendDataToParent() {
    this.carsEvent.emit(this.cars);
  }

  sayHii() {
    console.log('Hiiiiiiiiiii');
  }

  constructor(private cdr: ChangeDetectorRef) {
    console.log('Child1 Constructor');
  }
  ngOnChanges(changeObj: any) {
    console.log('Child1 ngOnChanges');
    console.log(changeObj);
  }
  ngOnInit() {
    console.log('Child1 ngOnInit');
    // Fetch Data From API
  }
  ngDoCheck() {
    console.log('Child1 ngDoCheck');
  }

  refresh(){
    this.cdr.markForCheck();

  }
}
