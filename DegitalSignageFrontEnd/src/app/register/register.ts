import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  WrongPasswordMatching : boolean = false;
  name: string = '';
  async HandleRegister() {
  console.log('Register button clicked');
  const name = (document.getElementById('username') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const confirmPassword = (document.getElementById('confirmpassword') as HTMLInputElement).value;
  
  if (password != confirmPassword) {
    console.log('Passwords do not match');
    
  }
  

  const response = await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' 
                
    },
    body: JSON.stringify({ usernameRequest: name, emailRequest: email, passwordRequest: password }) // ← this is the data going TO the backend
  });

  const message = await response.text();
  alert(message);
}
}
