import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  public url = 'http://localhost:4000/api/travel';
  public header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  constructor(private http: HttpClient) { }
  postTravelData(body: any) {
    return this.http.post(this.url, body, {headers: this.header})
  }
  getTravelData(){
    return this.http.get(this.url, {headers: this.header})
  }
}
