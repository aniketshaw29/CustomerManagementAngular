import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-get-email',
  templateUrl: './get-email.component.html',
  styleUrls: ['./get-email.component.css']
})
export class GetEmailComponent implements OnInit {
  email: string;
  customer: Customer;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  displayCustomer(){
    this.email = this.route.snapshot.params['email'];
    this.customerService.getCustomerByEmail(this.email).subscribe(data=>{
        this.customer=data;
      },
      error => console.log(error)
    );
    this.router.navigate(['displaySearchResult',this.customer]);
  }
}
