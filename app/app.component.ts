import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SocketService} from './socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private router: Router)
  {}
  
  register()
  {
      this.router.navigate(['/user/register']);
  }
  login()
  {
      this.router.navigate(['/user/login']);
  }
leaderBoard()
  {
      this.router.navigate(['/user/leaderBoard']);
  }
createBid()
  {
      this.router.navigate(['/user/createBid']);
  }
startBid()
  {
      this.router.navigate(['/user/startBid']);
  }

}
