import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

type Route = {
  name: string,
  url: string,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})

export class AppComponent {
  links: Route[] = [
    {
      name: 'home',
      url: '/'
    },
    {
      name: 'user',
      url: '/user/'
    },
    {
      name: 'best anime',
      url: '/best-anime/'
    }
  ]
}
