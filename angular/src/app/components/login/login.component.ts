import { ServicioService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: any;
  user = {
    email: '',
    password: ''
  };

  constructor(private servicioService: ServicioService, private router: Router) { }

  ngOnInit() {
    this.login();
  }

  login() {
    this.servicioService.login().subscribe(
      (data: any) => {
        this.usuarios = data;
        for (const usuario of this.usuarios) {
          if (usuario.email === this.user.email && usuario.password === this.user.password) {
            document.cookie = `email=${usuario.email}`;
            document.cookie = `image=${usuario.image}`;
            window.location.reload();
            this.router.navigate(['/home']);
            return;
          }
        }
        this.router.navigate(['/logout']);
      },
      error => {
        console.log(error);
        this.router.navigate(['/logout']);
      }
    );
  }
}
