import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Customer } from '../interfaces/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'api/customer';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }
  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.customersUrl + '/' + customerId);
  }
  createNewCustomer(customerObj: any): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customerObj, {});
  }
  deleteCustomerById(customerId: number): Observable<Customer> {
    return this.http.delete<Customer>(this.customersUrl + '/' + customerId);
  }
  updateCustomer(customerId: number, customerObj: any): Observable<Customer> {
    return this.http.put<Customer>(this.customersUrl + '/' + customerId, customerObj, {});
  }


}
