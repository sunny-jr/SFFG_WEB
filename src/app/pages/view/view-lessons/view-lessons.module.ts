import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLessonsComponent } from './view-lessons.component';
import { RouterModule, Routes } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { MessageService } from 'src/app/services/message.service';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

const routes: Routes = [
    {
        path: '',
        component: ViewLessonsComponent,
    },
];

@NgModule({
    declarations: [
        ViewLessonsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NzMessageModule,
        NzCardModule,
        NzGridModule,
        NzInputModule,
        NzIconModule,
        NzAvatarModule,
        NzPopconfirmModule,
        RouterModule.forChild(routes)
    ],
    providers: [MessageService]
})
export class ViewLessonsModule { }
