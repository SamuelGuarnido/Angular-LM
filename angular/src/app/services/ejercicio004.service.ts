import { Fruta } from './../interfaces/Fruta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Ejercicio004Service {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/frutas';

  recuperarFrutas(): Observable<Fruta[]> {
    return this.http.get<Fruta[]>(this.apiUrl);
  }

  agregarFruta(fruta: Fruta): Observable<Fruta> {
    return this.http.post<Fruta>(this.apiUrl, fruta);
  }

  modificarFruta(fruta: Fruta): Observable<Fruta> {
    const url = `${this.apiUrl}/${fruta.id}`;
    return this.http.put<Fruta>(url, fruta);
  }

  eliminarFruta(fruta: Fruta): Observable<void> {
    const url = `${this.apiUrl}/${fruta.id}`;
    return this.http.delete<void>(url);
  }
}
