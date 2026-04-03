import { Component, inject, signal, WritableSignal } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeService = inject(EmployeeService);
  employeeArr: WritableSignal<Employee[]> = signal([]);

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((response: Employee[]) => {
      this.employeeArr.set(response);
      console.log(response);
    });
  }
}
