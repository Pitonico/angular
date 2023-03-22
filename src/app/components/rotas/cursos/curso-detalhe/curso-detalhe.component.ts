import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy{
  id: number = 0;

  curso: any;

  // Obtendo informações da rota ativa
  // route: Objeto com informações da rota que esta ativa
  // params: é um BehaviorObject, portanto podemos nos inscrever para escutar as mudanças nos params
  // router: Objeto para manipulação do roteamento das rotas

  inscricao: Subscription;

  // snapshot:  Objeto com informações desse exato momento da rota, como se fosse uma foto,
  //            portanto não escutamos as mudanças que acontecem.
  // params: Objeto com o parâmetro
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CursosService){
    // this.id = this.route.snapshot.params['id'];
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id']
      this.curso = this.service.getCurso(this.id);
      if(this.curso == null){
        this.router.navigate(['/cursos/naoEncontrado'])
      }
    });
  }

  ngOnInit() {
    console.log('Componente Instanciado');
  }

  // desinscrever ao destruir o component, ou seja, ao sair da rota
  ngOnDestroy() {
    this.inscricao.unsubscribe();
    console.log('Componente Destruído');
  }
}
