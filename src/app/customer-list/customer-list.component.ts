import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    // this.customers=[
    //   {
    //     "id":1,
    //     "firstName": "Aniket",
    //     "lastName": "Shaw",
    //     "mobile": 6290361967,
    //     "address": "Barrackpore",
    //     "email": "aniketshaw0001@gmail.com"
    //   },
    //   {
    //     "id":2,
    //     "firstName": "Komal",
    //     "lastName": "Singh",
    //     "mobile": 8803432342,
    //     "address": "Salt Lake",
    //     "email": "komal.sr@gmail.com"
    //   }
    // ];
    this.getCustomers();
  }
  private getCustomers(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    });
  }
  updateCustomer(id: number){
    this.router.navigate(['updateCustomer',id]);
  }
  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(data=> {
      console.log(data);
      this.getCustomers();
    });
  }
}
