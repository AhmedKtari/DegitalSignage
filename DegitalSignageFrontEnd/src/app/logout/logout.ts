import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Authservice } from '../Services/authservice';
@Component({
  selector: 'app-logout',
  imports: [RouterLink],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class LogoutComponent {
 constructor(
    public authentservice : Authservice ,
    private router: Router
  ){
  }
  

  loggingOut() {
    this.authentservice.logout();
    this.authentservice.refreshPage();
    
  }
}
