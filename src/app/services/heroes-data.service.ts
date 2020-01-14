import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesDataService {

  endpoint = 'http://35.162.46.100/superheroes/';

  constructor( private httpClient: HttpClient) { }

  getHeroes() {
    return this.httpClient.get(this.endpoint);
  }
  getHero(index: number) {
    this.httpClient.get(this.endpoint).subscribe(data => {
      console.log(data[index]);
      return data[index];
    });
  }
}
