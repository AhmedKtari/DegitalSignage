import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Authservice } from '../Services/authservice';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {
  appName: string = 'MyApp';
  isMenuOpen = false;
  LogginStatuts: boolean = false;
  
  constructor(
    public authentservice : Authservice ,
    private router: Router
  
  ){
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
   ngOnInit(){
    this.LogginStatuts = this.authentservice.isLoggedIn()   
      
    }
  loggingOut() {
    this.authentservice.logout();
    
  }
    navigateToProfile() {
      console.log('Navigating to profile...');
      const username = this.authentservice.getAuthenticatedUser();  
      if (username) {
        this.router.navigate(['/profile/', username]);
      } else {
        console.error('No authenticated user found in session storage.');
      }
      
  }
     
}

