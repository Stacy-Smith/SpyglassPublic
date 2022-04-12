import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_SERVER = "http://localhost:8081/api/users"
  user: User;
  constructor(private httpClient: HttpClient) { }

  public getUserById(userId) {
    return this.httpClient.get(`${this.API_SERVER}/${userId}`)
  }

  public addUser(data) {
    return this.httpClient.post(this.API_SERVER,data)
  }

  public updateUser(userId, data) {
    return this.httpClient.put(`${this.API_SERVER}/${userId}`,data)
  }

}
