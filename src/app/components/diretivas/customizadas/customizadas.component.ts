import { Component } from '@angular/core';

@Component({
  selector: 'app-customizadas',
  templateUrl: './customizadas.component.html',
  styleUrls: ['./customizadas.component.css']
})
export class CustomizadasComponent {
  corAmarela: string = 'yellow';
  mostrarCursos: boolean = true;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
