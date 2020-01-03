import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWidgetComponent } from './movie-widget.component';
import { RatingComponent } from '../rating/rating.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { initialState, moviesListReducer } from '../../store/movies-list.reducer';
import { provideMockStore } from '@ngrx/store/testing';


const MOVIE = {
  Title: 'Avatar',
  Year: '2009',
  Rated: 'PG-13',
  Language: 'english',
  imdbID: '123',
  imdbRating: '4.3',
  Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
};

describe('MovieWidgetComponent', () => {
  let component: MovieWidgetComponent;
  let fixture: ComponentFixture<MovieWidgetComponent>;

  beforeEach((async() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWidgetComponent, RatingComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MovieWidgetComponent);
    component = fixture.componentInstance;
    component.movie = MOVIE;
    fixture.detectChanges();
    await fixture.whenStable();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ',  async() => {
    const debugElement: DebugElement = fixture.debugElement.query(
        By.css(`label[id="${3}_rating"]`),
    );
    const nativeElement = debugElement.nativeElement;
    spyOn(component, 'onClickRating');
    debugElement.triggerEventHandler('click',   3);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.onClickRating).toHaveBeenCalledWith({itemId: '123', rating: 3});
  });
});
