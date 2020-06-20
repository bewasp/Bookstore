import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserAccessService} from '../auth/user-access.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://127.0.0.1:8080/api/order/';

  constructor(private http: HttpClient, private access: UserAccessService) { }

  completeOrder() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
    };
    return this.http.post(this.url + this.access.currentUser.userId + '/complete-order', options);
  }
}
