import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { MessageService } from 'src/app/services/message.service';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        NzInputModule,
        NzMessageModule,
        NzButtonModule,
        NzCheckboxModule,
        NzIconModule,

        RouterModule.forChild(routes)],

    providers: [MessageService]
})
export class LoginModule { }
