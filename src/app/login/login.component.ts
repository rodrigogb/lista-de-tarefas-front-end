import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'rodrigo'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;
  

  // Router
  // Angular.giveMeRouter
  // Dependency Injection
  
  constructor(private router: Router) { 
  
  }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    if(this.username !== 'rodrigo' || this.password !== '123') {
      this.invalidLogin = true;

    } else {
      this.invalidLogin = false;
      // Redirect to WelcomePage
      this.router.navigate(['welcome'])
    }
  }

}
