import { ServicioService } from './../../services/service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
    name: '',
    image: ''
  };

  constructor(private servicioService: ServicioService, private router: Router) { }

  register() {
    this.servicioService.register(this.user).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.router.navigate(['/logout']);
      }
    );
  }
}
