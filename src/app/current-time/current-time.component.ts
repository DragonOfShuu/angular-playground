import { DatePipe } from '@angular/common';
import { afterNextRender, afterRender, Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-time',
  standalone: true,
  imports: [DatePipe],
  template: `
    {{timeToShow | date: 'medium'}}
  `,
  styles: ``
})
export class CurrentTimeComponent {
  @Input() time: Date|null = null;
  timeToShow: Date|null = this.time??new Date(Date.now());
  // private timeChangeInterval: null|NodeJS.Timeout = null;

  // private clearTimeInterval() {
  //   if (this.timeChangeInterval)
  //     clearInterval(this.timeChangeInterval)
  // }

  // private syncChanges() {
  //   this.clearTimeInterval();

  //   if (this.time) {
  //     this.timeToShow = this.time;
  //     return;
  //   }

  //   this.timeChangeInterval = setInterval(() => {
  //     this.timeToShow = new Date(Date.now())
  //   }, 1000)
  // }

  // ngOnInit() {
  //     this.syncChanges();
  // }

  // ngOnChanges() {
  //   this.syncChanges();
  // }

  // ngOnDestroy() {
  //   this.clearTimeInterval()
  // }
}
