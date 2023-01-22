import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLayoutComponent } from './create-layout/create-layout.component';



@NgModule({
    declarations: [
        CreateLayoutComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CreateLayoutComponent
    ]
})
export class PublicLayoutModule { }
