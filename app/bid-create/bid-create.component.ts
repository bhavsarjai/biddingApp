import {Bid} from '../Bid';
import {BidService} from '../bid.service';
import {UserService} from '../user.service';
import {DatePipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bid-create',
  templateUrl: './bid-create.component.html',
  styleUrls: ['./bid-create.component.css'],
  providers: [UserService, BidService]
})
export class BidCreateComponent implements OnInit {

  bid: Bid;
  bidItems: BidItem[];

  constructor(private userService: UserService, private bidService: BidService) {


  }

  ngOnInit() {
    this.bid = new Bid();
  }

  submit() {
    this.bidService.createBid(this.bid).subscribe(
      null,
      err => {console.log(err);});
  }
  add(bid: Bid, item: string, desc: string, minAmt: number): void {
    bid.bidItems.push({item, desc, minAmt} as BidItem);
    this.bid = bid;
  }

  delete(item: BidItem) {
    this.bid.bidItems = this.bid.bidItems.filter(h => h !== item)
  }
}
