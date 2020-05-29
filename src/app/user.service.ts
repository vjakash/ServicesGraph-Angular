import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user=[{key:"value"}];
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get("https://5ed0ec8f4e6d7200163a02f1.mockapi.io/user");
  }

  postData(userData):Observable<any>{
    return this.http.post("https://5ed0ec8f4e6d7200163a02f1.mockapi.io/user",userData);
  }

  deleteData(id):Observable<any>{
    return this.http.delete(`https://5ed0ec8f4e6d7200163a02f1.mockapi.io/user/${id}`);
  }
  getDataById(id):Observable<any>{
    return this.http.get(`https://5ed0ec8f4e6d7200163a02f1.mockapi.io/user/${id}`);
  }

  updateData(id,userData):Observable<any>{
    return this.http.put(`https://5ed0ec8f4e6d7200163a02f1.mockapi.io/user/${id}`,userData);
  }
}
