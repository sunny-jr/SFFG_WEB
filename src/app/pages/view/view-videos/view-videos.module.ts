import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewVideosComponent } from './view-videos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ViewVideosComponent,
    },
];

@NgModule({
    declarations: [
        ViewVideosComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class ViewVideosModule { }
