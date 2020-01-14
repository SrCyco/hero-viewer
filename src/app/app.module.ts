import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { SlugPipe } from './pipes/slug.pipe';
import { HeaderComponent } from './components/shared/header/header.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { PagerComponent } from './components/pager/pager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    HeroCardComponent,
    SlugPipe,
    HeaderComponent,
    JwPaginationComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
