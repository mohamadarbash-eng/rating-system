import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() public rating: number;
  @Input() public itemId: string;
  @Output() public ratingClick: EventEmitter<{itemId: string, rating: number}> = new EventEmitter<{itemId: string, rating: number}>();

 public inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  /**
   * this functions will save the movie'srating, which is selected by user
   * triggered by click event
   * @param rating: number
   */
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
       rating
    });
  }
}
