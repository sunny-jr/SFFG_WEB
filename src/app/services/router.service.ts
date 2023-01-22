import { Injectable } from '@angular/core';
import { NavigationBehaviorOptions, NavigationExtras, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RouterService {
    constructor(private router: Router) { }

    navigate(url: string, extras?: NavigationExtras) {
        const path = typeof url === 'string' ? [url] : [];
        this.router.navigate(path, extras);
    }

    navigateByUrl(url: string, extras?: NavigationBehaviorOptions) {
        this.router.navigateByUrl(url, extras)
    }

    getURL() {
        return this.router.url;
    }
}
