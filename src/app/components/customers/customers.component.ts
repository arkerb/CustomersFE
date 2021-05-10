
import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../interfaces/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(
    public customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers(): void{
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    },
    (error => {
      console.log(error);
    }));
  }

  deleteCustomer(id: number): void{
    this.customerService.deleteCustomerById(id).subscribe(() => {
      this.getCustomers();
    });
  }
}
