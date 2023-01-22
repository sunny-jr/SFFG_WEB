import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { USER_INFO } from 'src/app/common/cache';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'src/app/common/common';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    userID = '';
    password = '';
    passwordVisible = false;
    isRememberedEnabled = false;

    constructor(
        private user: UserService,
        private msg: MessageService,
        private http: HttpService,
        private route: RouterService
    ) { }

    ngOnInit(): void {
        const data = JSON.parse(localStorage.getItem(USER_INFO) || '');


        if (data && data.isRemembered) {
            const { userId, password } = data;
            this.userID = userId;
            // this.password = this.password;
        }
    }

    onLogin() {

        if (!this.userID || !this.password) {
            this.msg.raiseFail('UserID and Password is required!');
            return;
        }

        this.connect((res: any) => {
            if (res) {
                if (res.error) {
                    this.msg.raiseFail(res.message);
                    return;
                }

                this.http.post('user/login', res).subscribe({
                    next: (res) => {
                        if (res.error) {
                            this.msg.raiseFail('User not exists!');
                            return;
                        }
                        res.isRemembered = this.isRememberedEnabled;

                        this.user.saveUser(res);
                        this.user.isLoggedIn = true;
                        localStorage.setItem(USER_INFO, JSON.stringify(res));
                        this.route.navigate('/');
                    },
                    error: (err) => {
                        this.msg.raiseFail('Error in authentication!')
                    }
                }
                );
            }
        });
    }

    private connect(callback: Function) {
        const data = {
            userId: this.userID,
            password: this.password,
        };

        this.http.post('auth', data).subscribe(
            rs => {
                if (rs.error) {
                    callback(rs);
                }
                if (rs.access_Token && rs.refresh_Token) {
                    this.user.setApiToken(ACCESS_TOKEN, rs.access_Token);
                    this.user.setApiToken(REFRESH_TOKEN, rs.refresh_Token);
                    callback(data);
                }
                //callback();
            });
    }
}
