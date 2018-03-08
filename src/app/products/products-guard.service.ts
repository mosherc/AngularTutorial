import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    console.log(id);
    if (isNaN(id) || id < 1) {
      console.log("invalid id")
      this._router.navigate(['/products/not-found']);
      return false;
    }
    return true;
  }
}