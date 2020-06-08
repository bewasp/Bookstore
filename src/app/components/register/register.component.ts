import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../../models/register.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAccessService} from '../../services/auth/user-access.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  result: boolean;
  hide = true;

  constructor(private formBuilder: FormBuilder, private service: UserAccessService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
      'firstName': [this.user.firstName, [
        Validators.required
      ]],
      'lastName': [this.user.lastName, [
        Validators.required
      ]],
      'address': [this.user.address, [
        Validators.required
      ]],
      'userName': [this.user.username, [
        Validators.required
      ]],
      'phone': [this.user.phoneNumber, [
        Validators.required,
        Validators.pattern('[0-9]{9}')
      ]]
    });
  }

  onRegisterSubmit() {
    this.service.register(this.user).subscribe(result => {
      this.result = result;
      if (this.result) {
        alert('Registration success, now you can login!');
        this.router.navigate(['/login']);
      } else {
        alert('This email is already used');
      }
      console.log(this.result);
    });
  }
}
