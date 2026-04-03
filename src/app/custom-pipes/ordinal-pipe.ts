import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(input: number) {
    // 11th , 21st
    if (!input) return '';
    const mod100 = input % 100;
    if (mod100 >= 11 && mod100 <= 13) {
      return input + 'th';
    }
    switch(input % 10){
      case 1 : return input+'st';
      case 2 : return input+'nd';
      case 3 : return input+'rd';
      default : return input+'th';
    }
  }
}
