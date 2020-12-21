import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies$():Observable<Movie[]>{

    return this.http.get<Movie[]>(environment.api_url);
  }

  createMovie$(movie:Movie[]):Observable<Movie>{

    return this.http.post<Movie>(environment.api_url,movie,{headers:{'content-type':'application/json'}})
  }
}
