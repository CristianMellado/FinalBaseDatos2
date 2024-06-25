import { Component } from '@angular/core';

@Component({
  selector: 'app-search-review',
  templateUrl: './search-review.component.html',
  styleUrls: ['./search-review.component.css']
})
export class SearchReviewComponent {
  nombrePelicula: string = '';
  anio: string = '';
  director: string = '';
  critico: string = '';
  rating: string = '';

  constructor() {}

  buscarResena() {
    // Implementa la lógica para buscar reseñas según los criterios ingresados
    console.log('Nombre de la Película:', this.nombrePelicula);
    console.log('Año:', this.anio);
    console.log('Director:', this.director);
    console.log('Crítico:', this.critico);
    console.log('Rating:', this.rating);
  }
}
