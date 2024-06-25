
import { Component } from '@angular/core';

interface Review {
  movieTitle: string;
  year: number;
  director: string;
  reviewerName: string;
  reviewText: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reviews: Review[] = [
    {
      movieTitle: 'Titanic',
      year: 1997,
      director: 'James Cameron',
      reviewerName: 'John Doe',
      reviewText: 'Una película épica sobre el desastre del Titanic.',
      rating: 19
    },
    {
      movieTitle: 'Barbie',
      year: 2023,
      director: 'Greta Gerwig',
      reviewerName: 'Jane Smith',
      reviewText: 'Una visión moderna y divertida de la icónica muñeca.',
      rating: 18
    },
    {
      movieTitle: 'Oppenheimer',
      year: 2023,
      director: 'Christopher Nolan',
      reviewerName: 'Alice Johnson',
      reviewText: 'Una impresionante biografía del padre de la bomba atómica.',
      rating: 20
    }
  ];
}
