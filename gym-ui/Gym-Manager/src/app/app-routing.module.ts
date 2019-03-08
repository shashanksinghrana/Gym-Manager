import { CreateClientComponent } from './components/clients/create-client/create-client.component';
import { ClientDietComponent } from './components/clients/client-details/client-diet/client-diet.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';


import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ErrorComponent } from './components/error/error.component';

const appRouting:Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path:'about', component: AboutUsComponent},
    {path:'clients', component: ClientsComponent},
    {path:'clients/:clientId', component: ClientDetailsComponent,
     children:[
         {path:'diet', component:ClientDietComponent}
     ]    
    },
    {path:'createClient', component: CreateClientComponent},
    {path:'**', component: ErrorComponent}
];

export const appRoutes =  RouterModule.forRoot(appRouting);