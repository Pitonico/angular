import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnDestroy{

  cursos: any[];
  pagina: number = 0;
  inscricao: Subscription;

  constructor(
    private service: CursosService,
    private route: ActivatedRoute,
    private router: Router){
      this.cursos = this.service.getCursos();
      this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
        this.pagina = queryParams['pagina'];
      })
    }

  proximaPagina(){
    this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: { 'pagina': this.pagina}})
  }

  paginaAnterior(){
    if(this.pagina != 1){
      this.pagina--;
      this.router.navigate(['/cursos'], { queryParams: { 'pagina': this.pagina}})
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


}
