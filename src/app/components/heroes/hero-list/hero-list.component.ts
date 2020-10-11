import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/components/heroes/shared/heroes.service';
import { Router } from '@angular/router';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
    ) {
      this.heroesService.getHeroes().subscribe((heroes: Hero[]) => this.heroes = heroes);
    }

  ngOnInit(): void {
  }

  verHeroes(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}