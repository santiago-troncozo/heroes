import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/components/heroes/shared/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../shared/hero.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-heroe',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  public heroe;
  constructor(
    private heroeService: HeroesService,
    private activetedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.activetedRoute.params.subscribe(params => {
      this.heroeService.getHeroe(params.id).subscribe((heroe: Hero) => {
        this.heroe = heroe;
      });
    });
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
