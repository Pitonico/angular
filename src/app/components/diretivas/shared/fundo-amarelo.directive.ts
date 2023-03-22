import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Diretiva é como se fosse um componente sem template, tratando apenas da parte lógica, manipulação do DOM,
// podendo ser:
// Estrutural: Utilizado para mudar a estrutura dos elementos do DOM (*ngIf, *ngFor, *ngSwitch)
// Atributo: Utilizados para mudar o estilo e comportamento dos elementos DOM (ngClass, ngStyle).
// Componentes: São diretivas com template

// É utilizada para ser compartilhado em vários elementos / tags das páginas HTML da aplicação.

// Se quisermos aplicar essa diretiva a um tipo especifico de elemento, utilizados o elementos antes do nome
// do seletor. Ex: selector: 'p[fundoAmarelo]'

// ElementRef (Evitar o uso): Representa a referência de qualquer tag / elemento do DOM

// OBS: o Renderer esta DEPRECATED, portanto devemos utilizar o Renderer2.
// Renderer2: DEVEMOS EVITAR o uso ElementRef, pois é altera diretamente um elemento DOM, podendo haver
// problema de vulnerabilidade (segurança), portanto utilizamos o Renderer2.

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
  }

}
