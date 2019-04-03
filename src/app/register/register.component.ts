import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private  authService:  AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
}
