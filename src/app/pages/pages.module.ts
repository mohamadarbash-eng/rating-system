import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListPageComponent } from './movies-list-page/movies-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { UtilModule } from '../util/utili.module';



@NgModule({
  declarations: [MoviesListPageComponent],
  exports: [MoviesListPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    UtilModule
  ]
})
export class PagesModule { }
