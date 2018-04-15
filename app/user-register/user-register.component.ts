import {UserService} from '../user.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  providers: [UserService]
})
export class UserRegisterComponent implements OnInit {

  name: string;
  password: string;
  passwordConfirm: string;
  role: string;

  constructor(private router: Router,private userService: UserService)
  {
    this.name = '';
    this.password = '';
    this.passwordConfirm = '';
    this.role = '';

  }

  ngOnInit() {
//    this.userService.saveUser(this.name, this.password, this.role).subscribe(
//      user => {this.name = user.name; },
//      err => {console.log(err); });
  }

  onSubmit() {

    if (this.password === this.passwordConfirm) {
      console.log(this.name);
            console.log(this.password);
            console.log(this.role);
      this.userService.saveUser(this.name, this.password, this.role).subscribe(
      null,
      err => {console.log(err); });
    } else {
      console.log('password mismatch');
    }

    if (this.role === 'Bid Creator') {
      this.router.navigate(['/user/createBid']);
    }
    else {
      this.router.navigate(['/user/startBid', this.name ]);
    }


  }
}
