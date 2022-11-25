import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  getUrl = "http://localhost:8080/doctor/get-doctor";

  postUrl = "http://localhost:8080/doctor/add-doctor/";

  putUrl = "http://localhost:8080/doctor/update-doctor/";

  deleteUrl = "http://localhost:8080/doctor/delete-doctor/";

  constructor(private http: HttpClient) { }

  getDoctor() {
    return this.http.get<any>(this.getUrl)
  }
  addDoctor(data: any) {
    return this.http.post<any>(this.postUrl, data)
  }
  putDoctor(data: any, id: any) {
    return this.http.put<any>(this.putUrl + id, data)
  }
  deleteDoctor(id: any) {
    return this.http.delete<any>(this.deleteUrl + id)
  }
}
