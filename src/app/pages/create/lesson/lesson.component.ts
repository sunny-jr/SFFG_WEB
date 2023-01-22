import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

    isStart = false;
    inputValue: string | null = null;
    textValue: string | null = null;

    constructor(private msg: MessageService) { }

    ngOnInit(): void {


    }

    handleChange({ file, fileList }: NzUploadChangeParam): void {
        const status = file.status;
        if (status !== 'uploading') {
            console.log(file, fileList);
        }
        if (status === 'done') {
            this.msg.raiseSuccess(`${file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            this.msg.raiseFail(`${file.name} file upload failed.`);
        }
    }

    upload = (item: NzUploadXHRArgs): Subscription => {
        console.log(item);
        const { file } = item;

        return new Subscription()
    }




}
