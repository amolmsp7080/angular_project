import { Pipe, PipeTransform } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'mySort',
  pure: false,
})
export class MySortPipe implements PipeTransform {
  transform(arr: number[]) {
    console.log('sort pipe');
    return arr.sort((a, b) => a - b);
  }
}
