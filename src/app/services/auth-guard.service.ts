import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Route,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { USER_INFO } from '../common/cache';
import { HttpService } from './http.service';
import { RouterService } from './router.service';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {

    constructor(
        private user: UserService,
        private route: RouterService,
        private http: HttpService
    ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> {

        if (this.user.isLoggedIn) {
            return true;
        }

        if (this.user.getApiToken()) {
            this.loadUser(state.url || '/');
            return false;
        } else {
            this.route.navigate('login');
            return false;
        }
    }

    private loadUser(url: string) {
        const data = JSON.parse(localStorage.getItem(USER_INFO) || '');
        const { userId } = data;


        this.http.get('user', { id: userId }).subscribe({
            next: (rs) => {
                this.user.saveUser(rs);
                //   console.log(this.user.getUser())
                this.user.isLoggedIn = true;
                this.route.navigateByUrl(url);
                return true;
            },
            error: () => {
                this.route.navigate('login');
                return false;
            }
        })
    }

}
