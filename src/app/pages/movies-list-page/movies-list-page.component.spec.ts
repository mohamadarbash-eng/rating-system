import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListPageComponent } from './movies-list-page.component';
import { SharedModule } from '../../shared/shared.module';
import { UtilModule } from '../../util/utili.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { InitialState, initialState } from '../../store/movies-list.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';


describe('MoviesListPageComponent', () => {
  let component: MoviesListPageComponent;
  let fixture: ComponentFixture<MoviesListPageComponent>;
  let store: MockStore<InitialState>;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, UtilModule, CommonModule, HttpClientModule],
      declarations: [ MoviesListPageComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MoviesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
     store = TestBed.get<Store<InitialState>>(Store);
  });


  it('should create MoviesListPageComponent', () => {
    expect(component).toBeTruthy();
  });
});
