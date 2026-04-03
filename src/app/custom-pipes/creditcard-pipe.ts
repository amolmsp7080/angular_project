import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
})
export class CreditcardPipe implements PipeTransform {
  // **** **** **** 4444         Masking
  // 1111-2222-3333-4444         Formatting
  transform(cardNumber: string): string {
    // return cardNumber.replace(/(\d{4})(?=\d)/g, '$1-');
    let arr = [];
    for (let i = 0; i < cardNumber.length; i = i + 4) {
      arr.push(cardNumber.substring(i, i + 4));
    }
    return arr.join('-');
  }
}
