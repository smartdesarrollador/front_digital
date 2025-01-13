import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Solucion } from '../models/solucion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolucionService {
  selectCategory: Solucion = new Solucion();
  urlListar = environment.apiListarFilesSolucion;
  urlUpdateFile = environment.apiUpdateFileSolucion;
  urlDelete = environment.apiDeleteFileSolucion;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Solucion> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3Solucion, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateFileSolucion, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}
