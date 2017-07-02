import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';

import '@ngrx/core/add/operator/select';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { State } from '../state/state';
import * as userSelectors from '../state/user/selectors';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private store: Store<State>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.waitForAuthToInitialize()
      .switchMap(() => this.store.select(userSelectors.isAuthenticated))
      .take(1)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });
  }

  canLoad(route: Route): Observable<boolean> {
    return this.waitForAuthToInitialize()
      .switchMap(() => this.store.select(userSelectors.isAuthenticated))
      .take(1)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
        return false;
      });
  }

  waitForAuthToInitialize() {
    return this.store.select(userSelectors.initialized)
      .filter(initialized => initialized)
      .take(1);
  }

}
