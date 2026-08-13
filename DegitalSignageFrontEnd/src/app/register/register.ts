import { Component } from '@angular/core';
import { Authservice } from '../Services/authservice';
import { Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {

  WrongCredentials : boolean = false;
  public ErrorType: string = '';
  username: string = '';
  Logpassword: string = '';
  constructor(
              private authentservice : Authservice,
              private router: Router

  ) {}

  async HandleRegister() {
  console.log('Register button clicked');
  const name = (document.getElementById('username') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const confirmPassword = (document.getElementById('confirmpassword') as HTMLInputElement).value;
  this.username = name;
  this.Logpassword = password;
  if (password !== confirmPassword) {
    console.log('Passwords do not match');
    this.ErrorType = "Passwords do not match";
    this.WrongCredentials = true;
    return ;
  }
  

         const response = await fetch
(
          'http://localhost:8080/api/auth/register',
  {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' 
                
         },
         body: JSON.stringify({ usernameRequest: name,
                                emailRequest: email, 
                                passwordRequest: password })
   }
)
;

  const data = await response.json();
  if (response.ok) {
    console.log('Registration successful');
    this.authentservice.authenticate(this.username, this.Logpassword);
    this.router.navigate(['/profile/' + String(data.username)]);
  }
  else {
    console.log('Registration failed: ' + String(data.message));
    this.ErrorType = String(data.message);

    this.WrongCredentials = true;
  }
}
}


