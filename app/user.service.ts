import { Bid } from './Bid';
import {User} from './User';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {HttpResponse} from '@angular/common/http';

import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

  private saveURL = 'http://localhost:8080/users/save';
  private loginURL = 'http://localhost:8080/users/login';
  constructor(private http: HttpClient) {}

  saveUser(name: string, password: string, role: string): Observable<User> {
    const user = new User();
    user.setName(name);
    user.setPassword(password);
    user.setRole(role);
    console.log(' creating user ...' + JSON.stringify(user));

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, HEAD',
        'Access-Control-Allow-Headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
      })
    };

    return this.http.post(this.saveURL, JSON.stringify(user), options)
      .map((res: HttpResponse<any>) => res.body)
      .catch(this.handleError);
  }

  loginUser(name: string, password: string, role: string): Observable<User> {
    const user = new User();
      user.setName(name);
    user.setPassword(password);
    user.setRole(role);
    console.log(' user login...' + JSON.stringify(user));

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, HEAD',
        'Access-Control-Allow-Headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
      })
    };

    return this.http.get(this.loginURL+'?name='+name+'&password='+password+'&role='+role, options)
      .map((res: HttpResponse<any>) => {if (res === null) {console.log('invalid password');} else {return res}})
      .catch(this.handleError);
  }

 

  private handleError(error: HttpResponse<any>) {
    console.error(error);
    return Observable.throw(error.status);
  }
}
