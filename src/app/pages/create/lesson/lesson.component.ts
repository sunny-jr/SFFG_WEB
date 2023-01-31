import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { observable, Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { convertBuffertoBase64 } from 'src/app/util/file';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

    isStart = false;
    data = {
        LessonName: '',
        description: ''
    }
    allowedUpload = true;

    constructor(private msg: MessageService, private http: HttpService, private user: UserService) { }

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

    formChanged(change: any) {
        if (this.data.LessonName) this.allowedUpload = false;
        if (!this.data.LessonName) this.allowedUpload = true;

    }

    upload = (item: NzUploadXHRArgs) => {
        const { file, postFile } = item;
        const { id } = this.user.getSection();

        const data = {
            ...this.data,
            File: postFile as Blob,
            SectionId: this.user.getSection().id
        }


        return new Observable(obs => {

            this.http.upload('lesson', data).subscribe({
                next: (res) => {
                    switch (res.type) {
                        case 'success': {
                            this.msg.raiseSuccess(res.message)
                            item.onSuccess!({ res, name: file.filename }, item.file, item);
                            obs.next(true);
                            break;
                        }

                        case 'error':
                            item.onError!({ res, message: res.message }, item.file);
                            obs.next(false);
                            this.msg.raiseFail(res.message);
                            break;
                    }
                },
                error: (err) => {
                    item.onError!(err, item.file);
                }
            })

        }).subscribe();
    }




}
