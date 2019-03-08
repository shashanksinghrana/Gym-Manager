import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { appRoutes } from './app-routing.module';;
import {AgGridModule} from 'ag-grid-angular';
import { NavBarComponent } from './common/components/navbar/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home/home.component';
import { SidebarComponent } from './common/components/sidebar/sidebar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorComponent } from './components/error/error.component';

import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { GridComponent } from './common/components/gym-grid/gym-grid.component';
import { ClientDietComponent } from './components/clients/client-details/client-diet/client-diet.component';
import { ClientService } from './components/clients/client.service';
import { CreateClientComponent } from './components/clients/create-client/create-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneFormatDirective } from './directives/phone-format.directive';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SidebarComponent,
    AboutUsComponent,
    ErrorComponent,
    GridComponent,
    ClientsComponent,
    ClientDetailsComponent,
    ClientDietComponent,
    CreateClientComponent,
    PhoneFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    appRoutes
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
