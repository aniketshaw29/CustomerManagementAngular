import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-get-id-delete',
  templateUrl: './get-id-delete.component.html',
  styleUrls: ['./get-id-delete.component.css']
})
export class GetIdDeleteComponent implements OnInit {
  id:number;
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
  onSubmit(){
    // confirm("Are you sure you?");
    if (confirm("Are you sure you?") == true) {
      this.customerService.deleteCustomer(this.id).subscribe(data=> {
        console.log(data);
        this.getCustomers();
      });
      alert("Customer deleted Sucessfully");
      this.router.navigate(['homepage',]);
    } else {
      this.router.navigate(['homepage',]);
    }

  }
}
