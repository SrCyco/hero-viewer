import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesDataService } from 'src/app/services/heroes-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero: any;

  constructor( private ar: ActivatedRoute, private heroesData: HeroesDataService) {
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.heroesData.getHeroes().subscribe(heroes => {
        for (const hero in heroes) {
          if (heroes.hasOwnProperty(hero)) {
            const element = heroes[hero].name;
            const slug = element.toLowerCase().replace(/ /g, '-');
            if (slug === params.slug) {
              this.hero = heroes[hero];
            }
          }
        }
      });
    });
  }
}
