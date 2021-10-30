import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  private fontWeight = "normal";

  @HostBinding("style.fontWeight") get getFontWeight(){

    return this.fontWeight;
  }

  @HostBinding("style.cursor") get getCursor(){
    return "pointer";
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.fontWeight ="bold";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.fontWeight = "normal";
  }

}
