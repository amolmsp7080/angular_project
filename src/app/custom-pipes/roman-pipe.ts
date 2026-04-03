import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman',
})
export class RomanPipe implements PipeTransform {

  transform(num:number): string { // 12 XII  , 9 IX , 8 VIII
    const map:any = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';
    for (let key in map) {
      while (num >= map[key]) {
        result += key;
        num -= map[key];
      }
    }
    return result;
  }

}
