import { Injectable } from '@angular/core';

export type AnimeList = string[]

@Injectable({
  providedIn: 'root'
})
export class ActuallyGoodAnimeService {
  anime: AnimeList = ["RE:Zero", "Angel Beats"];

  getAnime() {
    return this.anime;
  }
}
