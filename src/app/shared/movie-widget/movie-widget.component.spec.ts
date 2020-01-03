import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWidgetComponent } from './movie-widget.component';
import { RatingComponent } from '../rating/rating.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { InitialState, moviesListReducer } from '../../store/movies-list.reducer';
import { MockStore } from '@ngrx/store/testing';


const MOCK_MOVIE = {
  Title: 'Avatar',
  Year: '2009',
  Rated: 'PG-13',
  Language: 'english',
  imdbID: '123',
  imdbRating: 4.3,
  Poster: '',
};

describe('MovieWidgetComponent', () => {
  let component: MovieWidgetComponent;
  let fixture: ComponentFixture<MovieWidgetComponent>;
  let store: MockStore<InitialState>;
  const storeMock = {
    select: (selected) => selected,
    dispatch: (dispatched) => dispatched
  };

  beforeEach((async() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWidgetComponent, RatingComponent ],
      imports: [StoreModule.forRoot({ movies: moviesListReducer })]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MovieWidgetComponent);
    component = fixture.componentInstance;
    component.movie = MOCK_MOVIE;
    fixture.detectChanges();
    await fixture.whenStable();
    store = TestBed.get<Store<InitialState>>(Store);
     spyOn(store, 'dispatch').and.callThrough();
  }));

  it('should create MovieWidgetComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger onClickRating function and dispatch with user rated item',  async() => {
    const debugElement: DebugElement = fixture.debugElement.query(
        By.css(`label[id="${3}_rating"]`),
    );

    spyOn(component, 'onClickRating').and.callThrough();
    debugElement.triggerEventHandler('click',   3);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.onClickRating).toHaveBeenCalledWith({itemId: '123', rating: 3});
    store.select('movies').subscribe((ratedItem) => {
      expect(ratedItem).toEqual({itemId: '123', rating: 3});
    });
  });
});
