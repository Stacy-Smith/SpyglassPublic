import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = "http://localhost:8081/api/cards";

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getGoals(goalId): Observable<any> {
    return this.http.get(`${baseUrl}/${goalId}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(goalId, data): Observable<any> {
    return this.http.put(`${baseUrl}/${goalId}`, data);
  }

  delete(goalId): Observable<any> {
    return this.http.delete(`${baseUrl}/${goalId}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}`);
  }

}
