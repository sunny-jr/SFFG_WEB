import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';
import { convertBuffertoBase64 } from 'src/app/util/file';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

    isStart = false;
    inputValue: string | null = null;
    textValue: string | null = null;

    constructor(private msg: MessageService, private http: HttpService) { }

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

    upload = (item: NzUploadXHRArgs) => {
        const { file, postFile } = item;
        const formData: FormData = new FormData();

        //console.log(postFile);
        formData.append('LessonName', 'Sample');
        formData.append('File', postFile as Blob, file.name);

        this.http.upload('lesson?secId=1', formData).subscribe({
            next: (res) => {
                console.log(res)
            },
            error: (err) => {
                console.log(err);
            }
        })

        return new Observable(obs => {
            // obs.next(formData);

        }).subscribe({
            // next: (res: any) => {
            //     console.log(res);
            //     // this.http.post('lesson?secId=1', res).subscribe({
            //     //     next: (res) => {
            //     //         console.log(res)
            //     //     }
            //     // })
            // }
        });
    }




}
