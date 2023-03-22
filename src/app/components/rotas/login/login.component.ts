import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService){
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }
}
