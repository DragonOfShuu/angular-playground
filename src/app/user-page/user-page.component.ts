import { StarPipe } from './../pipes/star.pipe';
import { UpperCasePipe } from '@angular/common';
import { ActuallyGoodAnimeService } from './../services/actually-good-anime/actually-good-anime-service.service';
import { Component, inject } from '@angular/core';
import { CurrentTimeComponent } from "../current-time/current-time.component";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UpperCasePipe, CurrentTimeComponent, StarPipe],
  template: `
    Time:
    <!-- <app-current-time /> -->
    <div class="flex flex-row flex-wrap gap-4">
      @for (anime of actuallyGoodAnimeService.getAnime(); track $index) {
        <div class="bg-purple-300 border-2 border-purple-500 rounded-lg p-5">
          {{anime | uppercase | star}}
        </div>
      }
    </div>
  `,
  styles: ``
})
export class UserPageComponent {
  actuallyGoodAnimeService = inject(ActuallyGoodAnimeService);
}
