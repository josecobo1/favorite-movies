import { Movie } from './../movie';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  @Output() addMovie = new EventEmitter<Movie>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
