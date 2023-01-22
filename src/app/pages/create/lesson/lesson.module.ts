import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { RouterModule, Routes } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { MessageService } from 'src/app/services/message.service';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { PublicLayoutModule } from 'src/app/module/public/public-layout.module';

const routes: Routes = [
    {
        path: '',
        component: LessonComponent,
    },
];
@NgModule({
    declarations: [
        LessonComponent
    ],
    imports: [
        CommonModule,
        NzCardModule,
        FormsModule,
        NzInputModule,
        NzUploadModule,
        NzMessageModule,
        NzIconModule,
        NzGridModule,
        PublicLayoutModule,
        RouterModule.forChild(routes)
    ],
    providers: [MessageService]
})
export class LessonModule { }
