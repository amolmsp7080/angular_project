import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablepaste]',
})
export class Disablepaste {
  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  onCopyOrPatse(event: any) {
    event.preventDefault();
  }
}
