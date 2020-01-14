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
  @ViewChild(HeroesComponent, { static: false }) child;


  constructor( private heroesData: HeroesDataService, private router: Router) { }


  ngOnInit() {
    this.heroesData.getHeroes().subscribe( data => this.heroes = data);
    this.setSavedPage();
  }

  showHero(slug: string) {
    this.router.navigate(['/hero', slug]);
    this.saveActivePage();
  }
  // onChangePage(heroesPage: Array<any>) {
  //   // update current page of items
  //   this.heroesPage = heroesPage;
  //   this.setSavedPageActive();
  //   sessionStorage.clear();
  // }
  newPage(heroesPage: Array<any>) {
    console.log('---page', heroesPage);
    this.heroesPage = heroesPage;
  }

  saveActivePage() {
    const active: string = document.querySelector('.number-item.active .page-link').innerHTML;
    if (!sessionStorage.getItem('page')) {
      sessionStorage.setItem('page', active);
    } else {
      sessionStorage.page = active;
    }
  }

  setSavedPage() {
    this.page = sessionStorage.page;
  }

  setSavedPageActive() {
    const pageItems: NodeListOf<Element> = document.querySelectorAll('.number-item');
    const activeItem = pageItems[this.page - 1];
    if (sessionStorage.getItem('page')) {
      const active: Element = document.querySelector('.number-item.active');
      if (!active) {
        activeItem.classList.add('active-temp');
      }
    } else {
      if (activeItem) {
        activeItem.classList.remove('active-temp');
      }
    }
  }
}
