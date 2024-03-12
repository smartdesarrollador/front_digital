import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Upload } from '../models/upload.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3, data, {
      headers: headers,
    });
  }

  updateData(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders();
    // Puedes ajustar la URL según tu API
    const url = `${environment.apiUpdateFile}/${id}`;
    return this.http.put(url, data, { headers: headers });
  }
}
