import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  
  constructor(private reviewService: ReviewService) { }

  async ngOnInit(): Promise<void> {
    this.reviews = await this.reviewService.getReviews();
  }
}
