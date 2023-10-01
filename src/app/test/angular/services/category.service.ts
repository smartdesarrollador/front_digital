import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'http://localhost/back_legajo/public/api/test_api_crud';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category> {
    return this.http.get(this.url);
  }
}
