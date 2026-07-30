import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { Authservice } from '../Services/authservice';




@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  WrongCredentials = false;
  username: string = '';
  password: string = '';
  authService: Authservice = new Authservice;
  constructor(private router: Router) {
     this.authService

  }
  HandleLogin() {
  this.WrongCredentials = false;
  if ( !this.authService.authenticate(this.username , this.password ) ) {
        
        this.WrongCredentials = true;
      return;
      
  } 
  this.router.navigate(['/profile/' + this.username]);
} 

}
