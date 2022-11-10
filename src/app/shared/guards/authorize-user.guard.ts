import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostLoginService } from '../service/post-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeUserGuard implements CanActivate {


  constructor(
    private service: PostLoginService,
    ) {}


    private userRoles = this.service.getToken()?.userRole



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthorized = route.data['role'].includes(this.userRoles) ? true : false;
    console.log(isAuthorized)
    console.log(this.userRoles)
    return isAuthorized;
  }
  
}
