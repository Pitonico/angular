//  Guard de Rota
/*  Serviço do Angular que faz o meio de campo antes de chamar a rota de fato, seja navegando entre os compo-
    nentes ou saindo de algum deles, fazendo a verificação se o usuário pode ou não acessar determinada rota.

    Métodos:
    CanActivate – Verifica se o usuário pode acessar a rota base do módulo;
    CanActivateChild – Verifica se o usuário pode visitar as rotas filha (dependentes) da rota base do módulo;
    CanDeactivate – Verifica se o usuário pode sair da rota;
    CanLoad – Verifica se o usuário pode utilizar lazy loaded (módulo).

    Basta injetar na rota o guard para haver a verificação.
    Rota: canActivate: [AuthGuard]
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, /*CanLoad*/ CanMatch {

  constructor(private authService: AuthService, private router: Router){}

  private verificarAcesso() {
    if(this.authService.usuarioEstaAutenticado()) {
      console.log('AuthGuard: Usuário autenticado');

      return true
    }

    console.log('AuthGuard: Usuário não autenticado');
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canActivate: Verificando se o usuário pode ter acesso a rota');
    return this.verificarAcesso();
  }

  // DEPRECATED
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   console.log('canLoad: Verificando se o usuário pode carregar o módulo');
  //   return this.verificarAcesso();
  // }

  canMatch(
    route: Route,
    segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('canLoad: Verificando se o usuário pode carregar o módulo');
    return this.verificarAcesso();
  }

}
