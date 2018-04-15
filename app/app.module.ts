import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BidCreateComponent } from './bid-create/bid-create.component';
import { BiddingComponent } from './bidding/bidding.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component, Pipe, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import {SocketService} from './socket.service';


@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    BidCreateComponent,
    BiddingComponent,
    LeaderBoardComponent  ],
  imports: [
    BrowserModule,
        FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
