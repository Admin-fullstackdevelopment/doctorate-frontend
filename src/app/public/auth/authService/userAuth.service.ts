import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private _http: HttpClient) { }

  signup(data: any):Observable<any> {
    return this._http.post('http://localhost:8080/userauth/register', data)
  }

  signin(data:any):Observable<any> {
    return this._http.post('http://localhost:8080/userauth/login', data)
  }

  getProfile() {
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this._http.get<any>('http://localhost:8080/userauth/profile',{headers:headers})
  }

  isLoggedIn() {
    return localStorage.getItem('token'); // get token from local storage
  }
}
