import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SigninComponent } from './components/signin/signin.component';
import { HelpComponent } from './components/help/help.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, pathMatch: 'full'
    },
    {
        path: 'registration', component: RegistrationComponent
    },
    {
        path: 'signin', component: SigninComponent
    },
    {
        path: 'help', component: HelpComponent
    },
    {
        path: 'search', component: SearchComponent
    },
];
