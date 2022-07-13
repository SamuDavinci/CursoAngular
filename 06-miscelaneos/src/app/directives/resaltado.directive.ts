import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') color: string = ''

  constructor(
    private elr: ElementRef
  ) {}

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.color || 'yellow')
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null)
  }

  private resaltar(color: string | null): void {
    this.elr.nativeElement.style.backgroundColor = color
  }

}
