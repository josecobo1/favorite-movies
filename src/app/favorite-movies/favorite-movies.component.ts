import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FavoriteMoviesService } from '../shared/services/favorite-movies.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {
  title = 'favorite-movies';
  favoriteMovies:Movie[]=[];

  constructor(private favoriteMoviesService:FavoriteMoviesService) { }

  ngOnInit(): void {
    this.favoriteMoviesService.getMovies$().subscribe(data => {console.log(data); this.favoriteMovies = data});
  }

}
