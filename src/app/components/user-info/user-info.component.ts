import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user-service/user.service';
import {UserInfoModel} from '../../models/user-info.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public userInfo: string;
  userInf: UserInfoModel;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private service: UserService) {
  }

  ngOnInit() {
    this.userInf = new UserInfoModel();

    this.editForm = this.formBuilder.group({
      'data': [this.userInf.data, [
        Validators.required
      ]]
    });

    this.route.paramMap
      .subscribe(params => {
        this.userInfo = params.get('type');
      });
  }

  modifyUser() {
    this.userInf.userInfo = this.userInfo.toUpperCase();
    this.service.modifyUser(this.userInf).subscribe((response: boolean) => {
        if (response) {
          alert('success');
        } else {
          alert('error');
        }
      }
    );
  }
}
