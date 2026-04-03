import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablerightclick]',
})
export class Disablerightclick {
  @HostListener('contextmenu', ['$event'])
  disableRightClick(event: any) {
    alert('This function is not allowed here.');
    event.preventDefault();
  }
}
