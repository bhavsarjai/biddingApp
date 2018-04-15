import { BidCreateComponent } from './bid-create/bid-create.component';
import { BiddingComponent } from './bidding/bidding.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/leaderBoard', component: LeaderBoardComponent},
  {path: 'user/createBid', component: BidCreateComponent},
  {path: 'user/startBid/:user', component: BiddingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  ngOnInit()
  {
    
  }
}

