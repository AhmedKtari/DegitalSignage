import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Authservice } from '../Services/authservice';
@Component({
  selector: 'app-loggout',
  imports: [RouterLink],
  templateUrl: './loggout.html',
  styleUrl: './loggout.css',
})
export class LoggoutComponent {
 constructor(
    public authentservice : Authservice 
  ){
  }
  

  loggingOut() {
    this.authentservice.logout();
  }
}
