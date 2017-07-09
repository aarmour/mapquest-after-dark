import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mad-avatar]'
})
export class AvatarDirective {

  constructor(el: ElementRef) {
    const style = el.nativeElement.style;
    style.width = '40px';
    style.height = '40px';
    style.borderRadius = '50%';
  }

}
