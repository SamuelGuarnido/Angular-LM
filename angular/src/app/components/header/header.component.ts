import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  dato!: any;
  datoImage!: any;

  constructor(public router: Router){
    let currentUrl = this.router.url;
    this.router.navigate([currentUrl]);
  }

  ngOnInit(): void {
    this.dato = localStorage.getItem('usuario');
    if (!this.dato){
    this.dato = "Entrar";
    }
    this.datoImage = localStorage.getItem('usuarioImage');
    if (!this.datoImage){
    this.datoImage = "/assets/mierda.svg";
    }
  }

  iniciar(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('usuarioImage');
    this.dato = "Entrar";
    this.datoImage = "/assets/mierda.svg";
  }


}
