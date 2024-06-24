import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostHomeService {
  private apiUrl = 'http://localhost:8080'; // Substitua pela sua URL de API

  constructor(private http: HttpClient) { }

  enviarDados(data: any,rota: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(`${this.apiUrl}/${rota}`);

    return this.http.post<any>(`${this.apiUrl}/${rota}`, data, { headers });
  }
}
