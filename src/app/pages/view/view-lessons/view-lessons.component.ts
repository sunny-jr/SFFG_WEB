import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/class/lesson';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-view-lessons',
    templateUrl: './view-lessons.component.html',
    styleUrls: ['./view-lessons.component.scss']
})
export class ViewLessonsComponent implements OnInit {

    data: Lesson[] = [];
    search = '';
    searchResult: Lesson[] = [];

    constructor(private http: HttpService, private user: UserService, private msg: MessageService) { }

    ngOnInit(): void {
        const { id } = this.user.getSection();
        const param = new HttpParams()
            .set('id', id);

        this.http.get('lesson/section', param).subscribe({
            next: (res) => {
                this.data = res;
            },
            error: (err) => {
                this.msg.raiseFail(err);
            }
        })
    }

    onFilter = (text: string) => {
        this.searchResult = this.data.filter((value: Lesson) => value.lessonName.toLowerCase().includes(text));
    }

}
