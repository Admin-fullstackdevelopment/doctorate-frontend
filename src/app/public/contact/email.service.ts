import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private getUrl = "http://localhost:8080/email"

  constructor(private _http: HttpClient) { }

  sendMessage(body: any){
    let headers = {
      headers : new HttpHeaders({
        'Content-Type' :'application/json'
      })
    }
    return this._http.post("http://localhost:8080/email",body,headers);
  }
}
