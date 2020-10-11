import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// services
import { HeroesService } from './shared/heroes.service';

// components
import { HeroeCardComponent } from './hero-card/hero-card.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroRoutes } from './heroes.routing';

// routes

@NgModule({
  declarations: [
    HeroeCardComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(HeroRoutes)
  ],
  providers: [
    HeroesService
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesModule { }
