import { getUser } from './../Model/getUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../Model/Auth';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8080/users/"
  authenticated:boolean = false;
  $currentUser

  constructor(private http : HttpClient) { }

  RegisterUser(user) {
    return this.http.post(this.url+"public/register", user);
  }

  CheckEmail(email:string) {
    return this.http.get(this.url+"public/check/"+email);
  }

  getUser(email:string){
    return this.http.get<getUser>(this.url+"auth/email/"+email)
  }

  authenticate(email:string, password:string) {
    let auth : Auth =<Auth> new Object();
    auth.email = email
    auth.password = password
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('sahan' + ':' + 's123')});
    return this.$currentUser = this.http.post<User>(this.url+"public/authenticate", auth);
  }

  
}
