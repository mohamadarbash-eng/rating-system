import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { moviesListReducer } from './store/movies-list.reducer';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule,
    StoreModule.forRoot({ movies: moviesListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
