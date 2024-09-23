import { Component } from '@angular/core';
import { TemplateFormComponent } from "../template-form/template-form.component";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";

@Component({
  selector: 'app-best-anime-page',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent],
  templateUrl: './best-anime-page.component.html',
  styleUrl: './best-anime-page.component.sass'
})

export class BestAnimePageComponent {

}
