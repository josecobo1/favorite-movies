import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable/* , of */ } from 'rxjs';
import { Movie } from 'src/app/movie';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor(private http: HttpClient) { }

  getMovies$():Observable<Movie[]>{
    return this.http.get<any>(environment.api_url)
/*         .pipe(map(data => data.results?.map(movie =>  Object.assign({title:movie.original_title})))); */
  }
}
