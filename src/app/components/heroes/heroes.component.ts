import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroesDataService } from 'src/app/services/heroes-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

  heroes: any;
  heroesPage: Array<any>;
  page: number;


  constructor( private heroesData: HeroesDataService, private router: Router) { }


  ngOnInit() {
    this.page = 1;
    this.heroesData.getHeroes().subscribe( data => this.heroes = data);
    this.setSavedPage();
  }

  currentPage( event ) {
    this.page = event;
  }

  showHero(slug: string) {
    this.router.navigate(['/hero', slug]);
    this.saveActivePage();
  }
  
  newPage(heroesPage: Array<any>) {
    setTimeout(() => {
      this.heroesPage = heroesPage;
      sessionStorage.clear();
    }, 0);
  }

  saveActivePage() {
    if (!sessionStorage.getItem('page')) {
      sessionStorage.setItem('page', `${this.page}`);
    } else {
      sessionStorage.page = this.page;
    }
  }

  setSavedPage() {
    if(sessionStorage.getItem('page')) {
      this.page = parseInt(sessionStorage.page);
    } 
  }
}
