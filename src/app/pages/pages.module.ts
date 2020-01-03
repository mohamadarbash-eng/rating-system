import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListPageComponent } from './movies-list-page/movies-list-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { UtilModule } from '../util/utili.module';



@NgModule({
  declarations: [MoviesListPageComponent],
  exports: [MoviesListPageComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    HttpClientModule,
    SharedModule,
    UtilModule
  ]
})
export class PagesModule { }
