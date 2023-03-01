import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-interpolation',
  templateUrl: './property-binding-interpolation.component.html',
  styleUrls: ['./property-binding-interpolation.component.css']
})
export class PropertyBindingInterpolationComponent {
  url: string = 'http://google.com'
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/id/2/500/333'

  getValor(): number{
    return 2;
  }

  getCurtirCurso() {
    return true;
  }


}
