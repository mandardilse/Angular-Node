import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  id:any
  user$: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(s=> this.id = s['id'])
  }

  ngOnInit() {
    this.user$ = this.userService.getUser(this.id)
  }

}
