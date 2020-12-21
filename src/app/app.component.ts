import { Movie } from './movie';
import { Component } from '@angular/core';


@Component({
  template:`<app-favorite-movies></app-favorite-movies>`,
  selector: 'app-root'
})
export class AppComponent {

favoriteMovies: Movie[] = [
  { title: 'Interstellar' } as Movie,
  { title: 'The big Lebowski' } as Movie,
  { title: 'Borat' } as Movie
];
}
