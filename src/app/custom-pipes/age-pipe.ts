import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(dob: any) {
    const currentYear = new Date().getFullYear();
    const bornyear = new Date(dob).getFullYear();
    return currentYear - bornyear;
  }
}
