import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../../models/register.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

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
      'phone': [this.user.phone, [
        Validators.required,
        Validators.pattern('[0-9]{9}')
      ]]
    });
  }

  onRegisterSubmit() {
    alert(this.user.firstName + ' ' + this.user.lastName + ' ' + this.user.phone + ' ' + this.user.email + ' ' + this.user.password + ' ' + this.user.address);
  }
}
