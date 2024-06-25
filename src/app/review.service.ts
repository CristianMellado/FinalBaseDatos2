import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private dbUrl = 'http://localhost:5984/reviews/';

  constructor() { }

  async getReviews(): Promise<any[]> {
    try {
      const response = await axios.get(this.dbUrl + '_all_docs?include_docs=true');
      return response.data.rows.map((row: any) => row.doc);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  }

  async addReview(review: any): Promise<void> {
    try {
      await axios.post(this.dbUrl, review);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }
}
