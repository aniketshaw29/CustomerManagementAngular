import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private router: Router) { }
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  ngOnInit(): void {
  }
  get f(){
    return this.form.controls;
  }

  saveCustomer(){
   this.customerService.createCustomer(this.customer).subscribe(data =>
      {
        console.log(data);
        this.getToCustomerList();
      },
    error => console.log(error)
   );

  }

  getToCustomerList(){
    this.router.navigate(['/customers']);
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }

}
