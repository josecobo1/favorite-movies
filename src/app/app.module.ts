import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';
import { FavMovieComponent } from './fav-movie/fav-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    FavMoviesComponent,
    FavMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
