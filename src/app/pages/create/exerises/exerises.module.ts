import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerisesComponent } from './exerises.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ExerisesComponent,
    },
];

@NgModule({
    declarations: [
        ExerisesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
})
export class ExerisesModule { }
