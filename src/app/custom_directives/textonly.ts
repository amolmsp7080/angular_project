import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextonly]',
})
export class Textonly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: any) {
    // custom function
    let regex = new RegExp(/^[a-z]+$/); // Text Only
    if (!regex.test(event.target.value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'lightgreen';
    }
  }
}
