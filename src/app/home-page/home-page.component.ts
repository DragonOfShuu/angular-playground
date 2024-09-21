import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { DeferCommentsComponent } from '../defer-comments/defer-comments.component';
import { OsViewerComponent } from '../os-viewer/os-viewer.component';
import { PropBindedComponent } from '../propBind/propbinded.component';
import { PuckImageComponent } from '../puck-image/puck-image.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PropBindedComponent, OsViewerComponent, CounterComponent, DeferCommentsComponent, PuckImageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})

export class HomePageComponent {
  title = 'Angular Playground';
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
