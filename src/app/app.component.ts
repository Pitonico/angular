import { Component } from '@angular/core';
import { AuthService } from './components/rotas/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService){
  }

  ngOnInit() {
    // Se inscrevendo no evento e escutando para obter os valores true ou false e atribuindo a variável
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        this.mostrarMenu = mostrar}
    );
  }
}
