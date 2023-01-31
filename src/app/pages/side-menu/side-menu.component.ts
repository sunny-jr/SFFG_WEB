import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/common/menu';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
    menus: Menu[] = [];
    title = '';
    isCollapsed = false;

    constructor(private user: UserService) {
        this.initMenu();
    }

    ngOnInit(): void { }

    private initMenu() {
        this.menus.push({
            title: 'Dashboard',
            icon: 'dashboard',
            link: '',
            isActive: false,
            subMenu: [
                {
                    title: 'My Lessons',
                    icon: 'arrow-right',
                    link: '/my-lessons',
                    isActive: false,
                    subMenu: [],
                },
                {
                    title: 'My Video Lessons',
                    icon: 'arrow-right',
                    link: '',
                    isActive: false,
                    subMenu: [],
                },
                {
                    title: 'My Exercises',
                    icon: 'arrow-right',
                    link: '',
                    isActive: false,
                    subMenu: [],
                },
            ],
        });

        this.menus.push({
            title: 'Create',
            icon: 'plus-circle',
            link: '',
            isActive: false,
            subMenu: [
                {
                    title: 'Add Lessons',
                    icon: 'plus-circle',
                    link: 'create-lesson',
                    isActive: false,
                    subMenu: [],
                },
                {
                    title: 'Add Video Lessons',
                    icon: 'plus-circle',
                    link: 'create-video',
                    isActive: false,
                    subMenu: [],
                },
                {
                    title: 'Add Exercises',
                    icon: 'plus-circle',
                    link: 'create-exercises',
                    isActive: false,
                    subMenu: [],
                },
            ],
        });

        this.menus.push({
            title: 'View',
            icon: 'eye',
            link: '',
            isActive: false,
            subMenu: [
                {
                    title: 'Manage Lessons',
                    icon: 'eye',
                    link: 'view/lessons',
                    isActive: false,
                    subMenu: [],
                },
                {
                    title: 'Manage Video Lessons',
                    icon: 'eye',
                    link: 'view/videos',
                    isActive: false,
                    subMenu: [],
                },
                {
                    title: 'Manage Exercises',
                    icon: 'eye',
                    link: '',
                    isActive: false,
                    subMenu: [],
                },
            ],
        });
    }

    onActiveMenu(title: string) {
        if (this.title) {
            this.title = '';
            return;
        }

        this.title = title;
    }

    onLogout() {
        this.user.userLogout();
    }
}
