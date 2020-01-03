import { Action, createReducer, on } from '@ngrx/store';
import { MoviesListAction } from './movies-list.action';

export interface InitialState {
    itemId: string,
    rating: number
}

export const initialState: InitialState = {
    itemId: null,
    rating: null
};

const reducer = createReducer(
    initialState,
    on(MoviesListAction, (state, { itemId, rating }) => ({ itemId, rating }))

);

export function moviesListReducer(state: InitialState | undefined, action: Action) {
    return reducer(state, action);
}
