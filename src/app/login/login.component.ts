import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'rodrigo'
  password = ''
  errorLogin = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    if(this.username !== 'rodrigo' || this.password !== '123') {
      this.errorLogin = true;
    } else {
      this.errorLogin = false;
    }
  }

}
