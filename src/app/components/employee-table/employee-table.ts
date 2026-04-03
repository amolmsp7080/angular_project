import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs: ['employees'],
  outputs: ['deleteEmpEvent'],
})
export class EmployeeTable {
  employees: any;

  deleteEmpEvent = new EventEmitter();
  deleteEmp(empId: number) {
    this.deleteEmpEvent.emit(empId);
  }
}
