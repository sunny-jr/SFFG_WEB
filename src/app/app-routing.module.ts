import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPreloader } from './preload';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/layout.module').then(m => m.LayoutModule)
    },
    {
        path: 'login',
        data: { preload: true },
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: AppPreloader,
            scrollPositionRestoration: 'top'
        })],
    exports: [RouterModule],
    providers: [AppPreloader]
})
export class AppRoutingModule { }
