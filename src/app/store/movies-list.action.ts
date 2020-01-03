import { createAction, props } from '@ngrx/store';


export interface Action {
    type: '[Movie List Page] Update';
    itemId: string,
    rating: number
}

export const MoviesListAction = createAction(
    '[Movie List Page] Update',
    props< {itemId: string, rating: number}>()
);


