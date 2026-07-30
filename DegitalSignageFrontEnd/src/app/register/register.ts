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
HandleRegister() {
  console.log('Register button clicked');
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const familyName = (document.getElementById('familyname') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const confirmPassword = (document.getElementById('confirmpassword') as HTMLInputElement).value;
  
  if (password !== confirmPassword) {
    console.error('Passwords do not match');
    this.WrongPasswordMatching = true;
    return;
  }
  console.log('Name:', name);
  console.log('Family Name:', familyName);
  console.log('Email:', email);
  console.log('Password:', password);

}
}