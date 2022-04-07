import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-id-update',
  templateUrl: './get-id-update.component.html',
  styleUrls: ['./get-id-update.component.css']
})
export class GetIdUpdateComponent implements OnInit {
  id:number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['updateCustomer',this.id]);
  }
}
