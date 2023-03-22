import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Criando uma Diretiva de Estrutura
// TemplateRef: Faz referência ao template
// ViewContainerRef: Faz referência ao contéudo que queremos renderizar

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  // set: toda vez que ele for modificado
  @Input() set ngElse(condition: boolean) {
    if(!condition) {
      // cria um conteudo dentro do template
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    else {
      // destroi o conteudo do template
      this._viewContainerRef.clear();
    }
  }

  constructor(private _templateRef: TemplateRef<any>, private _viewContainerRef: ViewContainerRef) {}

}
