import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  // create ElementRef Class Object inside Zoomin Class
  constructor(private ele: ElementRef) {
    console.log(this.ele);
  } // Dependency Injection

  @HostListener('mouseenter')
  onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,110%)';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)';
  }
}
