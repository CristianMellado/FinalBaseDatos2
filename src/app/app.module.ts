import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Si utilizas formularios en tu componente

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { SearchReviewComponent } from './search-review/search-review.component'; // Importa tu componente aquí
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AddReviewComponent,
    SearchReviewComponent, // Agrega tu componente aquí
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Asegúrate de agregar FormsModule si usas formularios en tu componente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
