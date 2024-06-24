import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHomeService {

  private apiUrl: String = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllProducts(rota: String): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${rota}`)
  }
}
