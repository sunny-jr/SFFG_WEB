import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoLessonComponent } from './video-lesson.component';
import { RouterModule, Routes } from '@angular/router';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MessageService } from 'src/app/services/message.service';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PublicLayoutModule } from 'src/app/module/public/public-layout.module';

const routes: Routes = [
    {
        path: '',
        component: VideoLessonComponent,
    },
];

@NgModule({
    declarations: [
        VideoLessonComponent
    ],
    imports: [
        CommonModule,
        NzUploadModule,
        NzMessageModule,
        NzIconModule,
        NzCardModule,
        FormsModule,
        NzInputModule,
        NzGridModule,
        PublicLayoutModule,
        RouterModule.forChild(routes)],

    providers: [MessageService]
})
export class VideoLessonModule { }
