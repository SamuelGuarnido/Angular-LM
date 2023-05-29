import { Fruta } from './../../interfaces/Fruta';
import { Component, OnInit } from '@angular/core';

import { Ejercicio004Service } from 'src/app/services/ejercicio004.service';

@Component({
  selector: 'app-ejercicio004',
  templateUrl: './ejercicio004.component.html',
  styleUrls: ['./ejercicio004.component.css']
})
export class Ejercicio004Component implements OnInit{

  frutas!: Fruta[];
  fruta!: Fruta;
  frutaSeleccionada: Fruta | undefined;

  constructor(private ejercicio004Service: Ejercicio004Service){
    this.fruta = {
      id:0,
      descripcion:"",
      precio:0
    }
  }

  ngOnInit(): void {
    this.recuperarFrutas();
  }

  baja(fruta: Fruta): void {
    this.ejercicio004Service.eliminarFruta(fruta).subscribe(() => {
      const index = this.frutas.findIndex(f => f.id === fruta.id);
      if (index !== -1) {
        this.frutas.splice(index, 1);
      }
    });
  }

  seleccionar(fruta: Fruta): void {
    this.frutaSeleccionada = { ...fruta };
    this.fruta = { id: fruta.id, descripcion: fruta.descripcion, precio: fruta.precio };
  }

  recuperarFrutas(): void {
    this.ejercicio004Service.recuperarFrutas().subscribe(result => {
      this.frutas = result;
    });
  }

  agregarFruta(): void {
    this.ejercicio004Service.agregarFruta(this.fruta).subscribe(result => {
      this.frutas.push(result);
      this.fruta = {
        id: 0,
        descripcion: '',
        precio: 0
      };
    });
  }

  modificarFruta(): void {
    if (this.frutaSeleccionada) {
      this.ejercicio004Service.modificarFruta(this.frutaSeleccionada).subscribe(result => {
        const index = this.frutas.findIndex(f => f.id === result.id);
        if (index !== -1) {
          this.frutas[index] = result;
        }
        this.frutaSeleccionada = undefined;
        this.fruta = {
          id: 0,
          descripcion: '',
          precio: 0
        };
      });
    }
  }

}
