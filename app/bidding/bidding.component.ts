import { Bid } from '../Bid';
import { BidService } from '../bid.service';
import { UserBid } from '../UserBid';
import { Component, OnInit } from '@angular/core';
import {SessionStorage} from '../SessionStorage';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css'],
  providers: [BidService, SessionStorage]
})
export class BiddingComponent implements OnInit {

  bid: Bid;
  userBid: UserBid;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bidService: BidService) {

  }

  ngOnInit() {
    this.bid = new Bid();
    this.userBid = new UserBid();
  }

  getBid()
  {
        this.userBid.user = this.route.snapshot.paramMap.get('user');
        console.log(this.userBid.user);
        this.bidService.getBid(this.bid.title).subscribe(
          res => {console.log(res);this.bid = res},
          err => {console.log(err);});

  }
//  getAllBids()
//  {
//    this.bidService.getAllBids().subscribe(
//      null,
//      err => {console.log(err);});
//
//  }

  updateBid()
  {
    this.userBid.bidTitle  = this.bid.title;
     this.userBid.bidItem = this.bid.bidItems[0].item;
    this.bidService.updateBid(this.userBid).subscribe(
      null,
      err => {console.log(err);});
  }
}
