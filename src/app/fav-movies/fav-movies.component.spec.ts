import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FavMovieComponent } from '../fav-movie/fav-movie.component';
import { FavMoviesComponent } from './fav-movies.component';
import { MovieService } from '../shared/services/movie.service';
import { of } from 'rxjs';
import { Movie } from '../shared/interfaces/movie';

const favoriteMoviesStub = [
  {title:'Borat'},
  {title:'tenet'},
  {title:'Campeones'}
]

describe('FavMoviesComponent', () => {
  let component: FavMoviesComponent;
  let fixture: ComponentFixture<FavMoviesComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavMoviesComponent, MockComponent(FavMovieComponent)/* , FavMovieComponent  */] ,
      imports: [HttpClientTestingModule]
      /*schemas: [NO_ERRORS_SCHEMA] */
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMoviesComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
    spyOn(movieService,'getMovies$').and.returnValue(of(favoriteMoviesStub))
/*
    fixture.detectChanges(); */
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title',()=>{
    // component.title = 'Test Title';

    expect(component.title).toBe('Mis películas Favoritas');
  });


  it('should call getMovies$ from movieService',()=>{

    fixture.detectChanges();
    expect(movieService.getMovies$).toHaveBeenCalled();

  })

  it('should show all favorite movies',()=>{
    // component.favoriteMovies = [...favoriteMoviesStub];
    let result:  Movie[];
    movieService.getMovies$().subscribe( data => result = data);

    component.favoriteMovies = result;


    fixture.detectChanges();
/*
    fixture.detectChanges(); */

    const favoriteComponents = fixture.debugElement.queryAll(By.directive(FavMovieComponent));

    // let favoriteMovies = favoriteComponent.favoriteMovies;


    expect(favoriteComponents.length).toBe(favoriteMoviesStub.length);

  })

  it('should show the movie titles',()=>{
    let result:  Movie[];
    movieService.getMovies$().subscribe( data => result = data);

    component.favoriteMovies = result;

    fixture.detectChanges();
    // const favoriteComponents = fixture.nativeElement.querySelectorAll('app-fav-movie');
    const favoriteComponents = fixture.debugElement.queryAll(By.directive(FavMovieComponent));

    favoriteComponents.forEach( (favMovie, i) => {
      let movie = favMovie.context.favoriteMovie.title;

      expect(movie).toContain(favoriteMoviesStub[i].title)
    })


  })
});
