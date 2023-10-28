import { Injectable } from '@angular/core';
import { Trabajador } from '../interface/trabajador';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  url = environment.apiUrlTrabajador;

  /* selectTrabajador: Trabajador = new Trabajador(); */

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer tu_token',
  });

  constructor(private http: HttpClient) { }

  getTrabajadores(): Observable<Trabajador> {
    return this.http.get(this.url);
  }
}
