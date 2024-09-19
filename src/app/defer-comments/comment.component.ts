import { Component, Input } from "@angular/core";

@Component({
    selector: `app-comment`,
    standalone: true,
    template: `
        <div class="bg-gray-300 rounded-md min-h-24 flex flex-row p-3 gap-2">
            <div class="rounded-full bg-gray-600 size-8">
                
            </div>
            <div>
                {{CommentText}}
            </div>
        </div>
    `,
})

export class CommentComponent {
    @Input() CommentText = "";
}
