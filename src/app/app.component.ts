import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropBindedComponent } from './propBind/propbinded.component';
import { OsViewerComponent } from './os-viewer/os-viewer.component';
import { CounterComponent } from "./counter/counter.component";
import { DeferCommentsComponent } from "./defer-comments/defer-comments.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropBindedComponent, OsViewerComponent, CounterComponent, DeferCommentsComponent],
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
  parentCount: number = 0;

  consumeNewCount(count: number) {
    this.parentCount = count;
  }
}
