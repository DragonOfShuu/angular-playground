import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return `🌟 ${value} 🌟`;
  }
}
