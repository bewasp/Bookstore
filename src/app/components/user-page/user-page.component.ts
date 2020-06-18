import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public user: UserModel;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service.getUser().subscribe((response: UserModel) => {
      this.user = response;
    });
  }
}
