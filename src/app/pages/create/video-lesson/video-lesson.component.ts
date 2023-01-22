import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-video-lesson',
    templateUrl: './video-lesson.component.html',
    styleUrls: ['./video-lesson.component.scss']
})
export class VideoLessonComponent implements OnInit {

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

}
