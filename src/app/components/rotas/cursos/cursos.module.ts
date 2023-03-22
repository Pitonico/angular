// MÓDULO DE FUNCIONALIDADE (FEATURE MODULE)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { MatListModule } from '@angular/material/list';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [
    CommonModule, // Possui as diretivas e pipes mais comuns do angular. É re-exportado pelo BrowserModule
    CursosRoutingModule,
    MatListModule
  ],
  exports: [],
  providers: [CursosService]
})
export class CursosModule { }
