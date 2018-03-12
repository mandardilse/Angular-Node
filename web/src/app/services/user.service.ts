import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  postUserRegistration(registerData){
    this.http.post('http://localhost:3000/register',registerData)
      .subscribe(res=> res)
  }

  makeLogin(loginDetails){
    this.http.post('http://localhost:3000/login', loginDetails)
      .subscribe(res=>res)
  }
}
