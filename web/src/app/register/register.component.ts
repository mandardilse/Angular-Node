import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData ={}
  constructor(private registerService: UserService) { }

  ngOnInit() {
  }

  registered(){
    this.registerService.postUserRegistration(this.registerData);
    console.log(this.registerData);
  }

}
