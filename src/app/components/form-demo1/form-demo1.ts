import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo1',
  imports: [FormsModule],
  templateUrl: './form-demo1.html',
  styleUrl: './form-demo1.css',
})
export class FormDemo1 {
  name = '';
  age = null;
}
