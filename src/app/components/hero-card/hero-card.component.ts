import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() heroData: any = {};
  @Input() heroSlug: string;
  @Output() selectedHero = new EventEmitter<string>();
  liked: boolean;
  disliked: boolean;

  constructor() {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit() {
    this.liked = false;
    this.disliked = false;
    this.buttonState();
  }

  showHero() {
    this.selectedHero.emit(this.heroSlug);
  }

  vote(value) {
    if (!localStorage.getItem(this.heroSlug)) {
      localStorage.setItem(this.heroSlug, value);
    } else {
      localStorage[this.heroSlug] = value;
    }
    this.buttonState();
  }

  buttonState() {
    switch (localStorage[this.heroSlug]) {
      case 'like':
        this.liked = true;
        this.disliked = false;
        break;
      case 'dislike':
        this.liked = false;
        this.disliked = true;
        break;
      default:
        this.liked = false;
        this.disliked = false;
        break;
    }
  }
}
