import { Bid } from './Bid';
import { UserBid } from './UserBid';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BidService {

    private bidURL = 'http://localhost:8080/bid';

  constructor(private http: HttpClient) { }

   createBid(bid: Bid): Observable<Bid> {
    console.log(' creating bid...' + JSON.stringify(bid));

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, HEAD',
        'Access-Control-Allow-Headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
      })
    };
    
    return this.http.post(this.bidURL+'/create', JSON.stringify(bid),options)
      .map((res: HttpResponse<any>) => {console.log('bid created');} )
      .catch(this.handleError);
  }
  
  getBid(title : string): Observable<Bid>
  {
    console.log(' getting bid...' + title);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, HEAD',
        'Access-Control-Allow-Headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
      })
    };
    let newurl = this.bidURL+'/'+title;
    return this.http.get(newurl, options)
      .map((res: HttpResponse<any>) => res)
      .catch(this.handleError);
  }
  
  updateBid(userBid : UserBid): Observable<Bid>
  {
    console.log(' updating bid');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, HEAD, PUT',
        'Access-Control-Allow-Headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
      })
    };
    return this.http.put(this.bidURL+'/update', JSON.stringify(userBid),options)
      .map((res: HttpResponse<any>) => {console.log('bid created');} )
      .catch(this.handleError);
  }
  

    private handleError(error: HttpResponse<any>) {
    console.error(error);
    return Observable.throw(error.status);
  }
}
