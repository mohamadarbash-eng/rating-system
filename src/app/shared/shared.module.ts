import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieWidgetComponent } from './movie-widget/movie-widget.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [MovieWidgetComponent, RatingComponent],
  exports: [MovieWidgetComponent, RatingComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
