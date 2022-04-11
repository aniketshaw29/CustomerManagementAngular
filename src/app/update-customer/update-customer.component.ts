import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";
import {ActivatedRoute, Router} from "@angular/router";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  id:number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    mobile: new FormControl('', [Validators.required, Validators.min(1000000000)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required,Validators.maxLength(12)])
  });
  get f(){
    return this.form.controls;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{
        this.customer=data;
      },
      error => console.log(error)
    );
  }
  getToCustomerList(){
    this.router.navigate(['/customers']);
  }
  onSubmit(){
    this.customerService.updateCustomer(this.id, this.customer).subscribe(data=>{
        this.getToCustomerList();
      },
      error => console.log(error)
    );
  }
  findByIDForm(){
    this.router.navigate(['/customers']);
  }

}
