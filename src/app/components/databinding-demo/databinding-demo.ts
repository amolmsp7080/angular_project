import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-demo',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding-demo.html',
  styleUrl: './databinding-demo.css',
})
export class DatabindingDemo {
  name: string = 'Virat Kohli';
  img_url: string = 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png';
  flag: boolean = true;
  max_allowed = 10;
  myPattern = '[A-Za-z]+';
  vehicle = 'vehicle3';
  user = { name: 'Sanjay Samantra', age: 50, address: 'Bangalore' }

  num1: number = 10;
  num2: number = 20;

  toggleFlag() {
    this.flag = !this.flag;
  }

  addResult: number = 0;
  addition(a: string, b: string) {
    this.addResult = +a + +b;
  }
}
