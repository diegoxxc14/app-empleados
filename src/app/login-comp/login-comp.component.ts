import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
  }
}
