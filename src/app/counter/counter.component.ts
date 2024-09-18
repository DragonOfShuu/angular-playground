import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <button (click)="increment()" class="button">
      Increment ({{count}})
    </button>
  `,
  styles: ``
})
export class CounterComponent {
  count = 0;
  @Output() countChanged = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
}
