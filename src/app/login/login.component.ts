import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form submitted!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Aquí puedes agregar lógica para autenticar al usuario utilizando servicios o cualquier otro método que prefieras.
  }
}
