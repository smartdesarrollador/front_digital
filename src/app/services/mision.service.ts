import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mision } from '../models/mision';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MisionService {
  url = environment.apiUrlMision;

  selectCategory: Mision = new Mision();

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer tu_token',
  });

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Mision> {
    return this.http.get(this.url);
  }
}
