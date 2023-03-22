// MÓDULO RAIZ (ROOT MODULE)
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassStyleBindingComponent } from './components/data-binding/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './components/data-binding/event-binding/event-binding.component';
import {
  PropertyBindingInterpolationComponent,
} from './components/data-binding/property-binding-interpolation/property-binding-interpolation.component';
import { TwoWayDataBindingComponent } from './components/data-binding/two-way-data-binding/two-way-data-binding.component';
import { CustomizadasComponent } from './components/diretivas/customizadas/customizadas.component';
import { NgContentComponent } from './components/diretivas/ng-content/ng-content.component';
import { NgclassComponent } from './components/diretivas/ngclass/ngclass.component';
import { NgforComponent } from './components/diretivas/ngfor/ngfor.component';
import { NgifComponent } from './components/diretivas/ngif/ngif.component';
import { NgstyleComponent } from './components/diretivas/ngstyle/ngstyle.component';
import { NgswitchCaseDefaultComponent } from './components/diretivas/ngswitch-case-default/ngswitch-case-default.component';
import { OperadorElvisComponent } from './components/diretivas/operador-elvis/operador-elvis.component';
import { FundoAmareloDirective } from './components/diretivas/shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from './components/diretivas/shared/highlight-mouse.directive';
import { HighlightDirective } from './components/diretivas/shared/highlight.directive';
import { NgElseDirective } from './components/diretivas/shared/ng-else.directive';
import { CursosGuard } from './components/rotas/cursos/guards/cursos.guard';
import { AuthGuard } from './components/rotas/guards/auth.guard';
import { DeactivateGuard } from './components/rotas/guards/deactivate.guard';
import { HomeComponent } from './components/rotas/home/home.component';
import { AuthService } from './components/rotas/login/auth.service';
import { LoginComponent } from './components/rotas/login/login.component';
import {
  PaginaNaoEncontradaComponent,
} from './components/rotas/pagina-nao-encontrada/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { PipeComponent } from './pipes/pipe/pipe.component';


// import { CursosModule } from './components/rotas/cursos/cursos.module';
// import { AlunosModule } from './components/rotas/alunos/alunos.module';


@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    ClassStyleBindingComponent,
    PropertyBindingInterpolationComponent,
    TwoWayDataBindingComponent,
    PipeComponent,
    CamelCasePipe,
    NgifComponent,
    NgswitchCaseDefaultComponent,
    NgforComponent,
    NgclassComponent,
    NgstyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    CustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,

  ],
  imports: [
    BrowserModule, // Possui toda a infraestrutura do Angular. Re-exporta o CommonModule
    BrowserAnimationsModule, // Exporta o BrowserModule mais serviços (providers) para usar com animações.
    FormsModule, // Possui os serviços (providers) e deritivas para formulários
    ReactiveFormsModule, // Possui toda a infraestrutura e deritivas para formulários reativos
    AlertModule, // ngx-bootstrap
    ButtonsModule,
    MatToolbarModule, // angular material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    // CursosModule,
    // AlunosModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard, CursosGuard, DeactivateGuard],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
