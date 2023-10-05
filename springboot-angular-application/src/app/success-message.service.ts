import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class SuccessMessageService {

  constructor(private http: HttpClient) { }

  successMessageService() {
    return this.http.get<Message>('http://localhost:8080/api/v1/greeting');
  }
}
