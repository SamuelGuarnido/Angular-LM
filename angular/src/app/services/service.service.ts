import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private url = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get(this.url);
  }

  register(usuario: any) {
    return this.http.post(this.url, usuario);
  }
}

