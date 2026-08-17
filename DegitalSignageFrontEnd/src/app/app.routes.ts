
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { WelcomeComponent } from './welcome/welcome';
import { profileComponent } from './profile/profile';

import { ErrorComponent } from './error/error';
import { LogoutComponent } from './logout/logout';
import { RouteGuard } from './Services/route-guard';
import { ManagingSignsComponent } from './managing-signs/managing-signs';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'profile/:username/:page',
        component: ManagingSignsComponent,
        canActivate: [RouteGuard]
    },
    {
        path : 'logout',
        component :LogoutComponent,
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


