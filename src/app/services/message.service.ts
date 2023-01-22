import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

declare var Swal: any;

@Injectable({
    providedIn: 'root',
})
export class MessageService {

    defError = 'There is an issue to the server!'
    defSuccess = 'Successfully saved!'

    constructor(private msg: NzMessageService) { }

    raiseSuccess(message?: string) {
        this.msg.success(message || this.defError);
    }

    raiseFail(message?: string) {
        this.msg.error(message || this.defError);
    }
}
