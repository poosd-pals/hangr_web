import { Component, OnInit, ViewEncapsulation, Directive, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Form} from '@angular/forms';

import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  form: FormGroup;

  constructor(private  authService:  AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });

    console.log(this.form.value);
  }

  ngAfterViewInit() {
    //document.querySelector('body').classList.add('blue');

  }

  ngOnDestroy(): void {
    //document.querySelector('body').classList.remove('blue');
  }
}