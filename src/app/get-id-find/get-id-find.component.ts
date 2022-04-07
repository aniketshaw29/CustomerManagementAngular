import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-get-id-find',
  templateUrl: './get-id-find.component.html',
  styleUrls: ['./get-id-find.component.css']
})
export class GetIdFindComponent implements OnInit {
  id:number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['displayByID',this.id]);
  }
}
