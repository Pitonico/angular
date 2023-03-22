import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  // @Input: Passando o valor de onde diretiva é chamada para dentro da variável
  // Quando colocamos o mesmo nome da diretiva no @Input(), podemos utilizar o [diretiva] = "valor", ao inves
  // de diretiva [highLightColor]="valor"

  // @Input() defaultColor: string = 'white';
  // @Input() highLightColor: string = 'yellow';
  @Input() defaultColor: string = 'white';
  @Input('highlight') highLightColor: string = 'yellow';

  constructor(
    private _elementRef: ElementRef,
    private _renderer2: Renderer2
  ) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = ''

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
