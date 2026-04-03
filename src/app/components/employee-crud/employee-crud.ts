import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  imports: [EmployeeTable, EmployeeAdd],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employees = [
    {
      id: 1,
      name: 'Amit Sharma',
      role: 'Manager',
      salary: 85000,
      status: 'Active',
      gender: 'male',
    },
    {
      id: 2,
      name: 'Priya Verma',
      role: 'Developer',
      salary: 65000,
      status: 'Active',
      gender: 'female',
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      role: 'Tester',
      salary: 38000,
      status: 'Inactive',
      gender: 'male',
    },
    {
      id: 4,
      name: 'Sneha Iyer',
      role: 'Developer',
      salary: 42000,
      status: 'Inactive',
      gender: 'female',
    },
    {
      id: 5,
      name: 'Karan Singh',
      role: 'Manager',
      salary: 52000,
      status: 'Active',
      gender: 'male',
    },
    {
      id: 6,
      name: 'Neha Gupta',
      role: 'Tester',
      salary: 72000,
      status: 'Active',
      gender: 'female',
    },
  ];

  deleteEmployee(empId: number) {
    const isConfirmed = confirm('Are you sure to delete?');
    if (isConfirmed) {
      this.employees = this.employees.filter((emp) => emp.id !== empId);
    }
  }

  addEmployee(newEmp: any) {
    this.employees.push(newEmp);
  }
}
