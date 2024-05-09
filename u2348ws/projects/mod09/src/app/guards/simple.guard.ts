import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("canActivate")
      let url: string = state.url;
      const result: boolean = 
                route.queryParams['name'].toLowerCase() === 'admin';
     if (!result) {
        alert('你不是會員，無法使用此功能');
        return this.router.parseUrl('/login?rUrl=' + url);
      }
      return result;
  
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = segments[0].path;
      console.log(segments[0].parameters["name"]);
      const result: boolean =
        segments[0].parameters["name"] === 'user1';
      if (!result) {
        alert('你不是會員，無法使用此功能');
        return this.router.parseUrl('/login?rUrl=' + url);
      }
      return result;
  
  }
}
