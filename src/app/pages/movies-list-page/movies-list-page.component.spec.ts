import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MoviesListPageComponent } from './movies-list-page.component';
import { SharedModule } from '../../shared/shared.module';
import { UtilModule } from '../../util/utili.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { InitialState, moviesListReducer } from '../../store/movies-list.reducer';
import { MockStore } from '@ngrx/store/testing';
import { MoviesListAction } from '../../store/movies-list.action';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const MOCK_MOVIE = [
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Language: 'english',
    imdbID: '123',
    imdbRating: 4.3,
    Released: new Date('18 Dec 2009'),
    Poster: '',
  },
  {
    Title: 'no one',
    Year: '2009',
    Rated: 'PG-13',
    Language: 'english',
    imdbID: '456',
    imdbRating: 2.3,
    Released: new Date('18 Dec 2009'),
    Poster: '',
  }
];

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math.random =  () => 0.5;

describe('MoviesListPageComponent', () => {
  let component: MoviesListPageComponent;
  let fixture: ComponentFixture<MoviesListPageComponent>;
  let store: MockStore<InitialState>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, UtilModule, CommonModule, StoreModule.forRoot({ movies: moviesListReducer }), HttpClientModule],
      declarations: [ MoviesListPageComponent ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(MoviesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
     store = TestBed.get<Store<InitialState>>(Store);
    component.moviesList = MOCK_MOVIE;
    fixture.detectChanges();
    await fixture.whenStable();
    spyOn(store, 'dispatch').and.callThrough();
  });


  it('should create MoviesListPageComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should has initial values',   ()=> {
    expect(component.moviesList[0].imdbRating).toEqual(4.3);
    expect(component.moviesList[1].imdbRating).toEqual(2.3);
  });

  it('should update MoviesList array when user rate a movie', async () => {
    store.dispatch(MoviesListAction({ itemId: '123', rating: 2 }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.moviesList[0].imdbRating).toEqual(2);
  });


  it('should randomly rate movie with random value at random time',  fakeAsync( ()=> {
    spyOn((component as any), 'getRandomStream').and.callThrough();
    const debugElement: DebugElement = fixture.debugElement.query(
        By.css(`button[id="rating-btn"]`));
    expect(component.switch).toBeFalsy();
    debugElement.triggerEventHandler('click', null);
    tick(3001);

    expect(component.switch).toBeTruthy();
    expect(component.moviesList[1].imdbRating).toEqual(2.5);
    expect(component.moviesList[0].imdbRating).toEqual(2);

    debugElement.triggerEventHandler('click', null);

    expect(component.switch).toBeFalsy();
  }));
});
