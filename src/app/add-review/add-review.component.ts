import { Component } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  review = {
    movieName: '',
    year: null,
    director: '',
    reviewerName: '',
    reviewText: '',
    rating: null
  };

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log(this.review);
    // Aquí puedes agregar la lógica para guardar la reseña en tu base de datos
  }
}
