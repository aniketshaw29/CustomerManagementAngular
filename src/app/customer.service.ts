import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Customer } from "./customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private getAllCustomersURL = "https://customer-management-2022.herokuapp.com/api/v1/getAllCustomers";
  private createCustomerURL = "https://customer-management-2022.herokuapp.com/api/v1/createCustomer";
  private getCustomerbyIdURL = "https://customer-management-2022.herokuapp.com/api/v1/getCustomer";
  private updateCustomerURL = "https://customer-management-2022.herokuapp.com/api/v1/updateCustomer";
  private deleteCustomerURL = "https://customer-management-2022.herokuapp.com/api/v1/deleteCustomer";
  private deleteAllCustomerURL = "https://customer-management-2022.herokuapp.com/api/v1/deleteAllCustomer";
  private getCustomerbyEmailURL = "https://customer-management-2022.herokuapp.com/api/v1/findByEmail";

    constructor(private HttpClient: HttpClient) { }
  getCustomerList(): Observable<Customer[]>{
     return this.HttpClient.get<Customer[]>(`${this.getAllCustomersURL}`);
  }
  createCustomer(customer: Customer): Observable<Object>{
    return this.HttpClient.post(`${this.createCustomerURL}`, customer);
  }
  updateCustomer(id: number, customer:Customer): Observable<Object>{
    return this.HttpClient.put(`${this.updateCustomerURL}/${id}`, customer);
  }
  deleteCustomer(id: number): Observable<Object>{
    return this.HttpClient.delete(`${this.deleteCustomerURL}/${id}`);
  }
  deleteALLCustomer(): Observable<Object>{
      return this.HttpClient.delete(`${this.deleteAllCustomerURL}`);
  }
  getCustomerById(id: number): Observable<Customer> {
    return this.HttpClient.get<Customer>(`${this.getCustomerbyIdURL}/${id}`);
  }
  getCustomerByEmail(email: string): Observable<Customer> {
    return this.HttpClient.get<Customer>(`${this.getCustomerbyEmailURL}/${email}`);
  }
}
