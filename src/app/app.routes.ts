import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BestAnimePageComponent } from './best-anime-page/best-anime-page.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: '',
    },
    {
        component: UserPageComponent,
        path: 'user'
    },
    {
        component: BestAnimePageComponent,
        path: 'best-anime'
    }
];
