import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListPageComponent } from './movies-list-page.component';
import { SharedModule } from '../../shared/shared.module';
import { UtilModule } from '../../util/utili.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { initialState, moviesListReducer } from '../../store/movies-list.reducer';
import { provideMockStore } from '@ngrx/store/testing';

describe('MoviesListPageComponent', () => {
  let component: MoviesListPageComponent;
  let fixture: ComponentFixture<MoviesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, UtilModule, CommonModule, HttpClientModule],
      declarations: [ MoviesListPageComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
