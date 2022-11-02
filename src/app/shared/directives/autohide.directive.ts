import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autohide]'
})
export class AutohideDirective {

  constructor(private element: ElementRef) {
    setTimeout(
      () => {
        this.element.nativeElement.style.display = 'none';
      }, 5000
    )
   }
}
