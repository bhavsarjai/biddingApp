import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import {SessionStorage} from '../SessionStorage';
import {User} from '../User';
import {UserJson} from '../UserJson';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserService, SessionStorage]
})
export class UserLoginComponent implements OnInit {

  user: User;
  jsonUser : UserJson;

  constructor(private router: Router,private userService: UserService, private sessionStorage: SessionStorage) { }

  ngOnInit() {
    this.user = new User();
  }
 onSubmit() {

      console.log(this.user.name);
            console.log(this.user.password);
            console.log(this.user.role);
      this.userService.loginUser(this.user.name, this.user.password, this.user.role).subscribe(
        res => {this.sessionStorage.userName = res.name; this.sessionStorage.role = res.role},
      err => {console.log(err); });

      this.router.navigate(['/user/startBid', this.user.name ]); 
  }
}
