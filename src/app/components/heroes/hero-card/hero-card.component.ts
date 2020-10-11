import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './hero-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['/hero', this.index]);
  }
}
