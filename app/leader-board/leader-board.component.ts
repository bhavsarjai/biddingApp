import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { BidTransaction } from '../BidTransaction';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  bidTrans : BidTransaction[];
  index : number;

  constructor(private socketService: SocketService) {
      this.index = 0;
      socketService.message().subscribe(message => {
      console.log(' message received for bidding is '+message);
      this.bidTrans[this.index++] = JSON.parse(message);

    this.bidTrans.sort((t1, t2) => {
    if (t1.bidAmt > t2.bidAmt) {
        return 1;
    }

    if (t1.bidAmt < t2.bidAmt) {
        return -1;
    }

    return 0;

    });
    })
  }

  ngOnInit() {

  this.bidTrans = new Array<BidTransaction>();
  }

}
