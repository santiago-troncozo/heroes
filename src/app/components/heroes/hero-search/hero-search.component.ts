import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/components/heroes/shared/heroes.service';
import { Hero } from '../shared/hero.model';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './hero-search.component.html',
})
export class HeroSearchComponent implements OnInit {
  public heroes: Hero[];
  termino: string;
  titulo: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.termino = params.query;
      this.heroeService.searchHeroes( this.termino ).subscribe( (heroes: Hero[]) => this.heroes = heroes);
    });
  }
  verHeroes(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}
