import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

// HostListener: é um metadado que irá escutar o evento que acontece no elemento que chama essa diretiva
// HostBinding: é um metadado q faz a associação de um determinado atributo da diretiva para um atributo do elemento HTML

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer2: Renderer2
  ) {}

  // Caso não precise manipular antes de atribuir
  //@HostBinding('style.backgroundColor') backgroundColor: string = '';

  // Caso precise manipular antes de atribuir
  backgroundColor: string = '';
  @HostBinding('style.backgroundColor') get setColor(){ // get: escutar sempre q modificar
    return this.backgroundColor;
  }

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'white')
    this.backgroundColor = 'white';
  }

}
