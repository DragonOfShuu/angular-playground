import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropBindedComponent } from '../propBind/propbinded.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropBindedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'Call Center Angular';
  operatingSystems: { id: string; name: string }[] = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
}
