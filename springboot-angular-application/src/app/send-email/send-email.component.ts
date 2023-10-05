import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SendEmail {


  private baseUrl = 'https://localhost:8080/api/emails';

  fromEmail:string;
  toEmail:string;
  attachment:File;

  constructor(private http: HttpClient) {}

  sendEmailWithAttachment(fromEmail: string, toEmail: string, attachment: File) {
    const formData: FormData = new FormData();
    formData.append('fromEmail', fromEmail);
    formData.append('toEmail', toEmail);
    formData.append('attachment', attachment, attachment.name);
    formData.append('currentDate',new Date().toString());

    return this.http.post(`${this.baseUrl}/send`, formData);
  }
}
