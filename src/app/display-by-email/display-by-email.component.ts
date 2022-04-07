import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../customer";

@Component({
  selector: 'app-display-by-email',
  templateUrl: './display-by-email.component.html',
  styleUrls: ['./display-by-email.component.css']
})
export class DisplayByEmailComponent implements OnInit {
  email: string;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    this.customerService.getCustomerByEmail(this.email).subscribe(data=>{
        this.customer=data;
      },
      error => console.log(error)
    );
  }

}
