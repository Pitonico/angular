import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements IFormCanDeactivate{

  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute, private service: AlunosService, private router: Router){
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.service.getAluno(id);

      if(this.aluno === null) this.aluno = {id: '', nome:'', email:''};

    })
  }
  podeDesativar(): boolean {
    return this.podeMudarRota();
  }

  onInput(): void{
    this.formMudou = true;
    console.log('mudou');

  }

  podeMudarRota(): boolean{
    if(this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página? ');
    }
    return true;
  }
}
