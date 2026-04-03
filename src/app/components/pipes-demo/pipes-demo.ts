import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { CreditcardPipe } from '../../custom-pipes/creditcard-pipe';
import { AgePipe } from '../../custom-pipes/age-pipe';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
import { FilterPipe } from '../../custom-pipes/filter-pipe';
import { RomanPipe } from '../../custom-pipes/roman-pipe';
import { MySortPipe } from '../../pipes/my-sort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, RemainingPipe,
     OrdinalPipe, CreditcardPipe, AgePipe,
     SalutationPipe,
     FilterPipe,
     RomanPipe,
     MySortPipe
    ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName = 'SacHIn teNdUlKAr';
  salary = 5000;
  dateObj = new Date();
  user = { sal: 5000, name: 'Ajit', age: 22, add: 'Hyderabad', gender: 'male' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];
  msg = 'Hello';

  num: number = 21;
  cardNumber = '1111222233334444';
  dob!: Date;

  employees = [
        { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
  ];
  searchText:string = '';

  numArr = [40,10,50,20,30];
}
