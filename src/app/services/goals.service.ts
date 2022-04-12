import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private API_SERVER = "http://localhost:8081/api/cards"
  constructor(private httpClient: HttpClient) { }

  //Post new goals
  public postGoal(data) {
    return this.httpClient.post(this.API_SERVER,data)
  }

  public getGoalById(goalId) {
    return this.httpClient.get(`${this.API_SERVER}/${goalId}`)
  }

  public updateGoal(goalId, data) {
    return this.httpClient.put(`${this.API_SERVER}/${goalId}`,data )
  }
}
