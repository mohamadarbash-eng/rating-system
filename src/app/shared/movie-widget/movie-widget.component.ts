import { Component, Input } from '@angular/core';
// App
import { MoviesInterface } from '../../pages/pages-interfaces/movies.interfaces';
import { Store } from '@ngrx/store';
import { Action, MoviesListAction } from '../../store/movies-list.action';

@Component({
  selector: 'app-movie-widget',
  templateUrl: './movie-widget.component.html',
  styleUrls: ['./movie-widget.component.scss']
})
export class MovieWidgetComponent {
@Input() movie: Partial<MoviesInterface>;


constructor(private store: Store<Action>) {

}
    /**
     * this function will transform the rating to integer using ceil or floor based on
     * rule: rest of the division is less than 1 more than 0.5 => ceil otherwise floor
     */
  public get getScaleFiveRating() {
    const rate = +this.movie.imdbRating;
    const scaledRate = rate % 2 > 0.5 && rate % 2 < 1 ? Math.ceil(rate) :  Math.floor(rate);
    return scaledRate;
  }

 public onClickRating(clickedItem: {itemId: string, rating: number}): void {
     this.store.dispatch(MoviesListAction({ itemId: clickedItem.itemId, rating: clickedItem.rating }));

  }
}
