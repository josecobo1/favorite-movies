import { environment } from '../../../environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Movie } from 'src/app/movie';
import { TestBed } from '@angular/core/testing';
import { favoriteMoviesToUse}  from '../../helpers/favorite-movies-stub'
import { FavoriteMoviesService } from './favorite-movies.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('FavoriteMoviesService', () => {
  let service: FavoriteMoviesService;
  let http: HttpTestingController;
  /* let httpClient: HttpClient; */

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FavoriteMoviesService);
    http = TestBed.inject(HttpTestingController);
    /* httpClient = TestBed.inject(HttpClient); */
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the favorite movies',()=>{
    let result: Movie[] = [];
    service.getMovies$().subscribe(data =>{console.log(data); result = data});

    const req = http.expectOne(environment.api_url);

    expect(req.request.method).toBe('GET');

    req.flush(favoriteMoviesToUse);
    http.verify();
    expect(result).toEqual(favoriteMoviesToUse);
  })

  it('should test for 404 error', ()=>{
    const errorMessage = 'error 404, not found';

    service.getMovies$().subscribe(
      data => fail('should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404,'status');
        expect(error.error).toEqual(errorMessage,'message');
      }
    )

    const req = http.expectOne(environment.api_url);

    // Respond with mock error
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  })
  });
