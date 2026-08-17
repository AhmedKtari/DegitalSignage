import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './login/login';
import { WelcomeComponent } from './welcome/welcome';
import { RegisterComponent } from './register/register';
import { FooterComponent} from './footer/footer'
import { MenuComponent} from './menu/menu'
import { ManagingSignsComponent } from './managing-signs/managing-signs';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, WelcomeComponent, RegisterComponent, 
              RouterOutlet , FooterComponent , MenuComponent ,
              ManagingSignsComponent
            
            ], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Course');
  constructor() {
  }
}
