import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { DeactivateGuard } from '../guards/deactivate.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';


/* ATENÇÃO
Tudo que for rota estática ou fixa, como '/alunos/novo', precisa vim antes para, ser analisado primeiro que
rota dinâmica como 'alunos/:id', onde o id pode ser qualquer coisa, para não ocorrer colisão entre eles.
*/

/* Rotas Filhas (children)
Utilizamos quando queremos evitar repetição na rota comum, como em 'alunos/...', e renderizar componente pai
e filho ao mesmo tempo na tela.
Necessario utilizar o <router-outlet></router-outlet> no alunos.component.html para acessar a rota filha
*/

const routes: Routes = [
  // { path: 'alunos', component: AlunosComponent},
  // { path: 'alunos/novo', component: AlunoFormComponent},
  // { path: 'alunos/:id', component: AlunoDetalheComponent},
  // { path: 'alunos/:id/editar', component: AlunoFormComponent},

  { path: '', component: AlunosComponent, canActivateChild: [AlunosGuard], children: [
    { path: 'novo', component: AlunoFormComponent},
    { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver }},
    { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [DeactivateGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
