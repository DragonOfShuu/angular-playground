import { ActuallyGoodAnimeService } from './../services/actually-good-anime/actually-good-anime-service.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-row flex-wrap gap-4">
      @for (anime of actuallyGoodAnimeService.getAnime(); track $index) {
        <div class="bg-purple-300 border-2 border-purple-500 rounded-lg p-5">
          {{anime}}
        </div>
      }
    </div>
  `,
  styles: ``
})
export class UserPageComponent {
  actuallyGoodAnimeService = inject(ActuallyGoodAnimeService);
}
