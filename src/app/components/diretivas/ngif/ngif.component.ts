import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent{

  cursos: string[] = ["Angular"];
  mostrarCursos: boolean = true;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
