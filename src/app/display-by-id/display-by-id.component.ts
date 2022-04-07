import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-by-id',
  templateUrl: './display-by-id.component.html',
  styleUrls: ['./display-by-id.component.css']
})
export class DisplayByIdComponent implements OnInit {
  id:number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{
        this.customer=data;
      },
      error => console.log(error)
    );
  }

}
