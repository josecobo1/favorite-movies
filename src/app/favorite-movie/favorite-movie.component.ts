import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss']
})
export class FavoriteMovieComponent implements OnInit {

  @Input() favoriteMovie: Movie;
  @Output() deleteMovie = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

}
