import { User } from './../Model/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8080/users/"
  constructor(private http : HttpClient) { }

  RegisterUser(user) {
    return this.http.post(this.url+"register", user);
  }

  CheckEmail(email:string) {
    return this.http.get(this.url+"check/"+email);
  }
}
