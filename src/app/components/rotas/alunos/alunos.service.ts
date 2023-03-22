import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  // Dados mockado
  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'},
  ]

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  getAluno(id: number): any {
    for(let aluno of this.alunos) {
      if(id == aluno.id){
        return aluno
      }
    }
    return null;
  }
}
