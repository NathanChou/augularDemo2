import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberCenterGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const result: boolean = route.queryParams.name.toLowerString() === 'anita';
    if (!result)
      alert('你不是會員，無法使用此功能');
    return result;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = segments[0].path;
      return this.checkLogin(url);
     
     
  }
  checkLogin(url: string): true | UrlTree {
    console.log("Url: " + url)
    let val: string = localStorage.getItem('isUserLoggedIn');

    if(val != null && val == "true"){
       if(url == "/login")
          this.router.parseUrl('');
       else 
          return true;
    } else {
       return this.router.parseUrl('/login');
    }
 }
}
