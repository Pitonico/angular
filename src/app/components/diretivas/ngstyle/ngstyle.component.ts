import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {
  ativo: boolean = false;
  tamanhoFonte: number = 20;

  mudarAtivo() {
    this.ativo = !this.ativo;
  }
}
