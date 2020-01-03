import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap, delay } from 'rxjs/operators';
import { interval, of, Subscription } from 'rxjs';
// App
import { MoviesInterface } from '../pages-interfaces/movies.interfaces';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movies-list-page',
  templateUrl: './movies-list-page.component.html',
  styleUrls: ['./movies-list-page.component.scss']
})
export class MoviesListPageComponent {
public moviesList: MoviesInterface[] = [];
public switch = false;
private subscription: Subscription;


  constructor(private store: Store<any>, http: HttpClient) {
    http.get(' http://localhost:3000/movies')
        // we could create and register global error handler using interceptor.
        .pipe(catchError((e) => {
          alert('something is wrong ' + e);
          return of(null);
        }))
        .subscribe((movies: MoviesInterface[]) => {
      this.moviesList = movies;
    });

      this.store.select('movies').subscribe((ratedItem) => {
          this.moviesList = this.moviesList.map((movie: MoviesInterface) => {
              if (movie.imdbID === ratedItem.itemId) {
                  movie.imdbRating = ratedItem.rating;
                  return movie;
              }
              return movie
          })
      })
  }

    /**
     * This function will generate random rate for a random item at random time
     * triggered by click event
     */
  public onClickRandomlyRating(): void {
    this.switch = !this.switch;
    if (this.switch) {
     this.subscription = interval(1).pipe(
          concatMap(i => of(Math.random() * 10 / 2).pipe(delay(1000 + (Math.random() * 4000))))
      ).subscribe((randomRate: number) => {
        const randomIndex: number = Math.floor(Math.random()* this.moviesList.length);
       this.moviesList[randomIndex].imdbRating =  randomRate.toFixed(1).toString();
       // TODO other solutions :
       // pure pipe
       // input object ref..
       // detectChanges..
       this.moviesList = [...this.moviesList];
      });
    } else {
      this.subscription.unsubscribe();
    }
  }

}
