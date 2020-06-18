import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAccessService} from '../auth/user-access.service';
import {UserInfoModel} from '../../models/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://127.0.0.1:8080/api/user';

  constructor(private http: HttpClient, private service: UserAccessService) { }

  getUser() {
    return this.http.get(this.url + '/' + this.service.currentUser.userId);
  }

  modifyUser(userInfo: UserInfoModel) {
    console.log(userInfo);
    return this.http.post(this.url + '/edit/' + this.service.currentUser.userId, userInfo);
  }
}
