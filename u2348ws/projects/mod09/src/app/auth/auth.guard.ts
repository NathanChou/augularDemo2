import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad, CanMatch {

  router = inject(Router);

  CheckLogin(url: string):boolean | UrlTree {
    let result: any = localStorage.getItem('IsAuthenticate');
    let role: any = localStorage.getItem('Role');
    console.log(`IsAuth? ${ result }, role: ${ role }`);

    if (result) {
      switch (url) {
        case "adminpage":
          result = (role === "Admin");
          break;
        case "membercenter":
          result = (role === "Users" || role === "Admin");
          break;
      }
    }

    if (!result)
      return this.router.parseUrl('/login?rUrl=' + url);

    if (url === "/login")
      return this.router.parseUrl('');

    return result;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      console.log("canActivate");
      var url = decodeURI(state.url);
      var idx = url.indexOf('/');
      url = url.substring(idx + 1);

    return this.CheckLogin(url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
