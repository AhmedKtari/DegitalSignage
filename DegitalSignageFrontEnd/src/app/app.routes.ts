
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { WelcomeComponent } from './welcome/welcome';
import { profileComponent } from './profile/profile';

import { ErrorComponent } from './error/error';
import { LoggoutComponent } from './loggout/loggout';
import { RouteGuard } from './Services/route-guard';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path : 'loggout',
        component :LoggoutComponent,
        canActivate: [RouteGuard]

    },
     {
        path: 'profile/:username',
        component: profileComponent,
        canActivate: [RouteGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
    },

    {
        path: 'welcome',
        component: WelcomeComponent,
    },
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path :'**',
        component:ErrorComponent

    }

];


