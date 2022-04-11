import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GetIdDeleteComponent } from './get-id-delete/get-id-delete.component';
import { GetIdUpdateComponent } from './get-id-update/get-id-update.component';
import { GetEmailComponent } from './get-email/get-email.component';
import { GetIdFindComponent } from './get-id-find/get-id-find.component';
import { DisplayByIdComponent } from './display-by-id/display-by-id.component';
import { DisplayByEmailComponent } from './display-by-email/display-by-email.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    HomePageComponent,
    GetIdDeleteComponent,
    GetIdUpdateComponent,
    GetEmailComponent,
    GetIdFindComponent,
    DisplayByIdComponent,
    DisplayByEmailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
