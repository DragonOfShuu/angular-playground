import { Component } from "@angular/core";

@Component ({
    selector: 'app-propbinded',
    styleUrls: ['propbinded.component.sass'],
    templateUrl: 'propbinded.component.html',
    standalone: true,
})

export class PropBindedComponent {
    isEditable = true;

    onClick() {
        this.isEditable = !this.isEditable;
    }
}