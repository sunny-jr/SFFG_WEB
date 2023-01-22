import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-create-layout',
    templateUrl: './create-layout.component.html',
    styleUrls: ['./create-layout.component.scss']
})
export class CreateLayoutComponent implements OnInit {

    @Input() bgLogo = '';

    constructor() { }

    ngOnInit(): void {
    }

}
