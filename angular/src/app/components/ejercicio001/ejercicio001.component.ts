import { Component } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  idioma: string;
};
@Component({
  selector: 'app-ejercicio001',
  templateUrl: './ejercicio001.component.html',
  styleUrls: ['./ejercicio001.component.css']
})

export class Ejercicio001Component {
  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Usuario 1',
      email: 'usuario1@example.com',
      edad: 25,
      idioma: 'Español'
    },
    {
      id: 2,
      nombre: 'Usuario 2',
      email: 'usuario2@example.com',
      edad: 30,
      idioma: 'Inglés'
    },
    {
      id: 3,
      nombre: 'Usuario 3',
      email: 'usuario3@example.com',
      edad: 28,
      idioma: 'Francés'
    }
  ];

  nuevoUsuario: Usuario = {
    id: 0,
    nombre: '',
    email: '',
    edad: 0,
    idioma: ''
  };
  usuarioEditado: Usuario | null = null;

  agregarUsuario() {
    this.nuevoUsuario.id = this.usuarios.length + 1;
    this.usuarios.push({ ...this.nuevoUsuario });
    this.nuevoUsuario = {
      id: 0,
      nombre: '',
      email: '',
      edad: 0,
      idioma: ''
    };
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioEditado = usuario;
  }

  guardarUsuarioEditado() {
    this.usuarioEditado = null;
  }

  borrarUsuario(usuario: Usuario) {
    const index = this.usuarios.findIndex((u) => u.id === usuario.id);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }
}
