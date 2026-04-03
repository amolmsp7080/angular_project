import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(employees: any, searchText: string) {
    if (!searchText) return employees;
    if (!employees) return [];

    return employees.filter((emp: any) => {
      return emp.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
