import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { User } from '../class/user';
import { COOKIE_DAYS_EXPIRE, USER_INFO } from '../common/cache';
import { ACCESS_TOKEN } from '../common/common';
import { getCookie, setCookie } from '../util/cookie';
import { HttpService } from './http.service';
import { RouterService } from './router.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private user: User = new User();
    isLoggedIn = false;

    constructor(private http: HttpService, private router: RouterService) { }

    getFirstName() {
        return this.user.firstName;
    }

    getLastName() {
        return this.user.lastName;
    }

    getEmail() {
        return this.user.email;
    }

    saveUser(user: User) {
        this.user = Object.assign({}, user, new User(user || {}));
    }

    userLogout() {
        this.setApiToken(ACCESS_TOKEN, '');
        this.router.navigate('/login');
    }

    getUser() {
        return this.user || {};
    }

    setApiToken(name: string, token: string) {
        setCookie(name, token, COOKIE_DAYS_EXPIRE);
    }

    getApiToken() {
        return getCookie(ACCESS_TOKEN);
    }
}
