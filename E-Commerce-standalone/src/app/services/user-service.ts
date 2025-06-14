import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  httpHeaders = {};
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.httpHeaders = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      })
    };
  }
  addNewUser(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`${environment.baseUrl}/users`,user ,this.httpHeaders)
  }
}
