import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constant } from '../shared/constant';



@Injectable()
export class UserService {
  constructor(private http: HttpClient, @Inject(Constant) private constant) { }
  postUserRegistration(registerData){
    this.http.post(this.constant.Register_Url,registerData).subscribe(s => {})
  }

  makeLogin(loginDetails){
    return this.http.post(this.constant.Login_Url,loginDetails)
  }

  getAllUsers(){
    return this.http.get(this.constant.Users_Url)
  }

  getUser(id:any){
    return this.http.get(this.constant.Users_Profile+id)
  }
}
