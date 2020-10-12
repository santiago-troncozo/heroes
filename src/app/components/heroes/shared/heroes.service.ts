import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  url = 'assets/data.json';
  constructor(private http: HttpClient) {
  }

   getHeroes() {
     return this.http.get(this.url);
   }

   getHeroe(id) {
    return this.getHeroes()
      .pipe(map((res: Hero[]) => res[id]));
   }

  searchHeroes( termino: string ) {
    return this.getHeroes()
      .pipe(map((res: Hero[]) => {
        const heroes = [];
        for (let i = 0; i < res.length; i++) {
          const nombre = res[i].nombre.toLowerCase();
          termino = termino.toLowerCase();
          if (nombre.indexOf(termino) >= 0) {
            res[i].id = i;
            heroes.push(res[i]);
          }
        }
        return heroes;
      }));
  }
}
