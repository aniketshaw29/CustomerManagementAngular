import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  private getCustomers(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    });
  }
  getIdFormForUpdate(){
    this.router.navigate(['getIdUpdate']);
  }
  getIdFormForDelete(){
    this.router.navigate(['getIdDelete']);
  }
  DeleteAll(){
    this.customerService.deleteALLCustomer().subscribe(data=> {
      console.log(data);
      this.getCustomers();
    });
    alert("All Customers Deleted");
  }
  getAllCustomerPage(){
    this.router.navigate(['customers']);
  }
  AddCustomerPage(){
    this.router.navigate(['createCustomer']);
  }
  findByEmailForm(){
    this.router.navigate(['getEmail']);
  }
  findByIDForm(){
    this.router.navigate(['getID']);
  }
}
