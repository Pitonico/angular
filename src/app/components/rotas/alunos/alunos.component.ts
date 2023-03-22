import { Component } from '@angular/core';
import { AlunosService } from './alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  alunos: any[] = []

  constructor(private service: AlunosService, private router: Router){
    this.alunos = this.service.getAlunos();
  }

  novoAluno(){
    this.router.navigate(['alunos/novo'])
  }

}
