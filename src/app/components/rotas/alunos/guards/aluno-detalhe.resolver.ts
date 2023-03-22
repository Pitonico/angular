// Resolver:  É um guarda de rota resolve alguma informação antes da rota abrir e renderizar, pois por padrão,
//            primeiro o componente é renderizado para depois obter as informações.
//
// Rota: resolver: { variável: Guard }

import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunoService: AlunosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> {
    console.log('AlunoDetalheResolver: Carregando informações');

    let id: number = route.params['id'];
    return this.alunoService.getAluno(id);
  }
}
