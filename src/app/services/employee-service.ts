import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  httpClient = inject(HttpClient);

  /* getAllEmployees() {
    return this.httpClient.get('http://localhost:3000/employees');
  } */

  // convert JS objects to Employee Objects
  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees').pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((responseObj: Employee) => new Employee(responseObj));
      })
    );
  }
}
