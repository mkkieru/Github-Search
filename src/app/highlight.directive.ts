// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   constructor() { }

// }
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('teal');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("null");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}