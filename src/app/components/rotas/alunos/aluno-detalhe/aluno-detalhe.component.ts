import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnDestroy {

  aluno: Aluno = { id: 0, nome: '', email: ''};

  inscricao: Subscription;

  constructor(private _route: ActivatedRoute, private _service: AlunosService, private _router: Router){
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   let id = params['id'];
    //   this.aluno = this.service.getAluno(id);
    // })
    console.log('AlunoDetalheComponent: Componente inicializado');
    this.inscricao = this._route.data.subscribe(
      info => {
        console.log('Recebendo o objeto Aluno do resolver');
        this.aluno = info['aluno']
      }
    )
  }

  editarContato(){
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    // this.inscricao.unsubscribe;
  }

}
