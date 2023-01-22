import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    users: User = new User();
    isCollapsed = false;

    constructor(private user: UserService) {
        this.users = this.user.getUser();
    }

    ngOnInit(): void { }

    onLogout() {
        this.user.userLogout();
    }
}
