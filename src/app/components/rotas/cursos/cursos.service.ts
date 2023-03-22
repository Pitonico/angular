import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // Dados mockados
  getCursos(): any {
    return [
      { id: 1, nome: 'Angular 2+ '},
      { id: 2, nome: 'Java' }
    ]
  }

  getCurso(id: number): any {
    let cursos: any[] = this.getCursos();
    for (let curso of cursos) {
      if(id == curso.id){
        return curso;
      }
    }
    return null;
  }
}
