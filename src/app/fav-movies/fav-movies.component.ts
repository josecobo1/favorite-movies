import { MovieService } from './../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/interfaces/movie';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.scss']
})
export class FavMoviesComponent implements OnInit {

  title = 'Mis películas Favoritas';

  favoriteMovies: Movie[];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    
    this.movieService.getMovies$().subscribe(data => this.favoriteMovies = data);

    /* [
      {title:'Borat'},
      {title:'tenet'},
      {title:'Campeones'}
    ] */
  }

}
