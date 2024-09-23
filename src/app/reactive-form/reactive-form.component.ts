import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.sass'
})
export class ReactiveFormComponent {
  favAnimeForm = new FormGroup({
    favoriteAnime: new FormControl('', Validators.required),
    reasonFavAnime: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  handleSubmit() {

  }
}
