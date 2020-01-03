import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from '../rating/rating.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


const MOVIE = {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Language: 'english',
    imdbID: '123',
    imdbRating: '4.3',
    Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
};

describe('RatingComponent', () => {
    let component: RatingComponent;
    let fixture: ComponentFixture<RatingComponent>;

    beforeEach((async() => {
        TestBed.configureTestingModule({
            declarations: [ RatingComponent ]
        })
            .compileComponents();
        fixture = TestBed.createComponent(RatingComponent);
        component = fixture.componentInstance;
        component.itemId = MOVIE.imdbID;
        component.rating = +MOVIE.imdbRating;
        fixture.detectChanges();
        await fixture.whenStable();
    }));

    it('should create RatingComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should  emit rating from user to parent component',  async() => {
        const debugElement: DebugElement = fixture.debugElement.query(
            By.css(`label[id="${3}_rating"]`),
        );
        spyOn(component.ratingClick, 'emit').and.callThrough();
        const nativeElement = debugElement.nativeElement;
        debugElement.triggerEventHandler('click',   3);
        fixture.detectChanges();
        await fixture.whenStable();
        expect(component.ratingClick.emit).toHaveBeenCalledWith({itemId: '123', rating: 3});
    });
});
