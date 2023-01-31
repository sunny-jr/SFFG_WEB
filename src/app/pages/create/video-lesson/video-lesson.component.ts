import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-video-lesson',
    templateUrl: './video-lesson.component.html',
    styleUrls: ['./video-lesson.component.scss']
})
export class VideoLessonComponent implements OnInit {

    data = {
        VideoTitle: '',
        Description: ''
    }
    allowedUpload = true;

    constructor(private msg: MessageService, private user: UserService, private http: HttpService) { }

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
        if (this.data.VideoTitle) this.allowedUpload = false;
        if (!this.data.VideoTitle) this.allowedUpload = true;

    }

    upload = (item: NzUploadXHRArgs) => {
        const { file, postFile } = item;
        const { id } = this.user.getSection();

        const data = {
            ...this.data,
            VideoFile: postFile as Blob,
            SectionId: this.user.getSection().id
        }


        return new Observable(obs => {

            this.http.upload('video', data).subscribe({
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
