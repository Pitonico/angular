// MÓDULO DE ROTA RAIZ (ROOT ROUTING MODULE)

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/rotas/guards/auth.guard';
import { HomeComponent } from './components/rotas/home/home.component';
import { LoginComponent } from './components/rotas/login/login.component';
import { CursosGuard } from './components/rotas/cursos/guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './components/rotas/pagina-nao-encontrada/pagina-nao-encontrada/pagina-nao-encontrada.component';

/* Lazy Loading (modulos sendo carregados sob demanda): Melhorar a perfomace e segurança.
loadChildren: Objeto para carregar as rotas filhas em lazy loading.
- Como esta importando aqui, não pode ter o import do module em nenhum outro canto.
- Como o /cursos esta na rota principal, no modulo da rota do curso, nao adiciona 'cursos' nos paths,
  se não fica repetido /cursos/cursos/...
*/

// A ordem das rotas é importante: caminho relativo, '' e não encontrada (wildcard)

// pathMatch: como irá validar a rota
//            full: toda a url (utiliza geralmente com rotas vazia '')
//            prefix: uma parte da url (utiliza geralmente com rotas filhas)

const routes: Routes = [
  // { path: 'cursos', loadChildren: 'app/components/rotas/cursos.module#CursosModule'} DEPRECATED
  { path: 'cursos',
    loadChildren: () => import('./components/rotas/cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    //canLoad: [AuthGuard]
    canMatch: [AuthGuard] },
  { path: 'alunos',
    loadChildren: () => import('./components/rotas/alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    //canLoad: [AuthGuard]
    canMatch: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] } ,
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: '**', component: PaginaNaoEncontradaComponent, /* canActivate: [AuthGuard] */}
];

// # (hash antes da rota): Por padrão o angula não utiliza, mas é importante quando se esta trabalhando tbm com o
// backend, pois algumas linguagens não conseguem diferenciar se é uma url de roteamento ou uma requisição AJAX
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule] // Possui as diretivas e serviços relacionado a rotas
})
export class AppRoutingModule { }
