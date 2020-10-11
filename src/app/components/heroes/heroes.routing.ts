import { Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

export const HeroRoutes: Routes = [
    { path: 'heroes', component: HeroListComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: 'search/:query', component: HeroSearchComponent },
];
