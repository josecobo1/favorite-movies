import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../shared/interfaces/movie';

@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.scss']
})
export class FavMovieComponent implements OnInit {

  @Input() favoriteMovie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
