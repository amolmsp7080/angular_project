import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs: ['addEmpEvent'],
})
export class EmployeeAdd {
  newEmp = { id: null, name: '', role: '', salary: null, status: '', gender: '' };

  addEmpEvent = new EventEmitter();
  addEmp() {
    this.addEmpEvent.emit(this.newEmp);
    this.clearMyForm();
  }
  clearMyForm(){
    this.newEmp = { id: null, name: '', role: '', salary: null, status: '', gender: '' };
  }
}
