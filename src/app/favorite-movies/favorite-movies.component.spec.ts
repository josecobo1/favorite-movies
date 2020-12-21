import { FavoriteMovieComponent } from './../favorite-movie/favorite-movie.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FavoriteMoviesService } from '../shared/services/favorite-movies.service';
import { favoriteMoviesToUse}  from './../helpers/favorite-movies-stub'
import { FavoriteMoviesComponent } from './favorite-movies.component';
import { By } from '@angular/platform-browser';
import { MockComponent} from 'ng-mocks';
import { DebugElement } from '@angular/core';

/* import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core'; */

/* const favoriteMoviesToUse: Movie[] = [
  { title: 'Interstellar' } as Movie,
  { title: 'The big Lebowski' } as Movie,
  { title: 'Borat' } as Movie
];
 */


describe('FavoriteMoviesComponent', () => {
  let component: FavoriteMoviesComponent;
  let fixture: ComponentFixture<FavoriteMoviesComponent>;
  let favoriteMovieService: FavoriteMoviesService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMoviesComponent, MockComponent(FavoriteMovieComponent) ],
      imports: [HttpClientTestingModule]/* ,
      providers:[FavoriteMoviesService] *//* ,
      schemas: [ NO_ERRORS_SCHEMA ] */
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMoviesComponent);
    component = fixture.componentInstance;
    favoriteMovieService = TestBed.inject(FavoriteMoviesService);
    spyOn(favoriteMovieService,'getMovies$').and.returnValue(of(favoriteMoviesToUse));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the movies from the service',()=>{
    fixture.detectChanges();

    expect(favoriteMovieService.getMovies$).toHaveBeenCalled();
  })

  describe('Component Render', () => {

    it('should show as title "favorites-movies"', () => {
      const titleElement = fixture.nativeElement.querySelector('h1');
      fixture.detectChanges();
      expect(titleElement.textContent).toContain(component.title);
    });

    let movieComponents;

    beforeEach(() => {
      component.favoriteMovies = [...favoriteMoviesToUse]
      fixture.detectChanges();
      // movieComponents = fixture.nativeElement.querySelectorAll('.movie');
      movieComponents = fixture.debugElement.queryAll(By.directive(FavoriteMovieComponent));
    })

    it('should show all the favorites movies', () => {

      expect(movieComponents.length).toBe(favoriteMoviesToUse.length);
    })

    it('should show the movie titles', () => {
/*       movieComponents.forEach((movieElement: DebugElement, index)=>{
        let movie = movieElement.context.favoriteMovie.title;

          //  console.log(movie);

        expect(movie).toContain(favoriteMoviesToUse[index].title);
      }); */

        const movieComponentsInputs = movieComponents.map(
          htmlcomponent => (htmlcomponent.componentInstance as FavoriteMovieComponent).favoriteMovie
        )
        expect(movieComponentsInputs).toEqual(favoriteMoviesToUse);
    })



});
});
