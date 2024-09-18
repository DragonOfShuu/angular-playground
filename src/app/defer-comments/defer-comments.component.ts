import { Component } from '@angular/core';
import { CommentComponent } from "./comment.component";

@Component({
  selector: 'app-defer-comments',
  standalone: true,
  imports: [CommentComponent],
  template: `
    @defer (on viewport) {
      <app-comment CommentText="Angular is such a cool framework actually. React is still amazing, but I love how object oriented angular is. It's pretty epic." />
    } @placeholder {
      <p>Scroll down a little further...</p>
    } @loading (minimum 1s) {
      <p>Positive Comment loading...</p>
    }
  `,
  styles: ``
})

export class DeferCommentsComponent {

}
