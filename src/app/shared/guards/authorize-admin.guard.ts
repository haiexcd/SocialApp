import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostLoginService } from '../service/post-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeAdminGuard implements CanActivate {



  constructor(
    private service: PostLoginService,
    ) {}

    private isAuthorized(route: ActivatedRouteSnapshot): boolean {
      const userToken = this.service.getToken()
      const role = userToken?.userRole
      return (role === 'admin') ? true : false
    }
 



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }
  
}
