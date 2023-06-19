import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadminGuard implements CanActivate {
  
constructor(private auth:AdminService,private router:Router)
{

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLogged = this.auth.isLoggedIn();
      if (isLogged == true) {
        return true;
      } else {
        this.router.navigateByUrl('/user-pages/login');
        return false;
      }
  }
  
}
