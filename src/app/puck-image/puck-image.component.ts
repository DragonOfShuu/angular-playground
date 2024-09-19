import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-puck-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <img ngSrc="/puck-image.png" alt="Puck from the anime re:zero" width="512" height="512" />
  `,
  styles: ``
})

export class PuckImageComponent {

}
