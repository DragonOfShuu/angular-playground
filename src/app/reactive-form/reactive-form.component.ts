import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.sass'
})
export class ReactiveFormComponent {
  favAnimeForm = new FormGroup({
    favoriteAnime: new FormControl(''),
    reasonFavAnime: new FormControl(''),
  })

  handleSubmit() {

  }
}
