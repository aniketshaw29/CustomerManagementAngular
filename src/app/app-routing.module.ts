import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {GetIdUpdateComponent} from "./get-id-update/get-id-update.component";
import {GetIdDeleteComponent} from "./get-id-delete/get-id-delete.component";
import {GetEmailComponent} from "./get-email/get-email.component";
import {GetIdFindComponent} from "./get-id-find/get-id-find.component";
import {DisplayByIdComponent} from "./display-by-id/display-by-id.component";

const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'createCustomer', component: CreateCustomerComponent },
  {path: 'updateCustomer/:id', component: UpdateCustomerComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: 'getIdUpdate', component: GetIdUpdateComponent},
  {path: 'getIdDelete', component: GetIdDeleteComponent},
  {path: 'getEmail', component: GetEmailComponent},
  {path: 'getID', component: GetIdFindComponent},
  {path: 'displayByID/:id', component: DisplayByIdComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
