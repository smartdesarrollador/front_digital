import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  /*   getPosts() {
    return this.http.get('http://localhost/back_legajo/public/api/test_api');
  } */

  getPosts() {
    return this.http.get('https://iatecdigital.com/public/api/test_api');
  }
}
