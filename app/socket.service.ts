import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';


@Injectable()
export class SocketService {

  private serverUrl = 'http://localhost:8080/bidding';
  private stompClient = null;
  private ws = null;
  private connected = false;
  private subject = new Subject<any>();


  constructor() {
    this.initializeWebSocketConnection();
  }
  ngOnInit() {
  }

  initializeWebSocketConnection(): Observable<string> {
    this.ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(this.ws);
    this.stompClient.connect(
      {},
      frame => {
        this.connected = true;
        this.stompClient.subscribe('/inMemMsgBroker', (message) => {
          if (message.body) {
            this.subject.next(message.body);
          }
        });
      });
    return this.subject.asObservable();
  }

  message() : Observable<string> {

      return this.subject.asObservable();

  }
}
