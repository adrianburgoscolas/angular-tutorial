import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLinkStyle]'
})
export class LinkStyleDirective {

  constructor(private elemt: ElementRef) {}

  @HostListener('mouseenter') onMounseEnter() {
    this.hightLight('#a8a8a8');
  }
  
  @HostListener('mouseleave') onMounseLeave() {
    this.hightLight('');
  }

  private hightLight(color: string) {
    this.elemt.nativeElement.style.backgroundColor = color;
  }

}
