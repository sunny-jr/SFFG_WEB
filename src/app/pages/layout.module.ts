import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        data: { preload: true },
        component: LayoutComponent,
        children: [
            {
                path: 'create-lesson',
                loadChildren: () => import('./create/lesson/lesson.module').then((m) => m.LessonModule),
            },
            {
                path: 'sample',
                loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule),
            },
            {
                path: 'create-video',
                loadChildren: () => import('./create/video-lesson/video-lesson.module').then((m) => m.VideoLessonModule),
            },
            {
                path: 'create-exercises',
                loadChildren: () => import('./create/exerises/exerises.module').then((m) => m.ExerisesModule),
            },
            {
                path: 'view/lessons',
                loadChildren: () => import('./view/view-lessons/view-lessons.module').then((m) => m.ViewLessonsModule),
            },
            {
                path: 'view/videos',
                loadChildren: () => import('./view/view-videos/view-videos.module').then((m) => m.ViewVideosModule),
            },
        ],
    },
];
@NgModule({
    declarations: [
        LayoutComponent,
        SideMenuComponent
    ],
    imports: [
        CommonModule,
        NzLayoutModule,
        NzIconModule,
        NzMenuModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
})
export class LayoutModule { }
