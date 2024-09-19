import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-puck-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <button (click)="buttonToggle()" class="button">
      Hide Image
    </button>
    @if (imageVisible) {
      <img ngSrc="/puck-image.png" alt="Puck from the anime re:zero" width="512" height="512" />
    }
  `,
  styles: ``
})

export class PuckImageComponent {
  imageVisible: boolean = true;

  buttonToggle() {
    this.imageVisible = !this.imageVisible;
  }
}
