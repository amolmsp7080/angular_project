import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  // pure: true
})
export class RemainingPipe implements PipeTransform {
  transform(msg: string) {
    console.log('Remaining pipe called...')
    return 100 - msg.length;
  }
}
