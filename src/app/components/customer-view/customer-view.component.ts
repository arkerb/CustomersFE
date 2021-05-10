import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  id = '';
  postMethod = false;
  firstName = '';
  lastName = '';
  dateOfBirth = '';
  year = 2021;
  month = 1;
  day = 1;
  username = '';
  password = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new' && id !== null){
      this.id = id;
      this.getCustomerData(+id);
    }else{
      this.postMethod = true;
    }

  }
  getCustomerData(id: number): void{
    this.customerService.getCustomerById(id).subscribe(customer => {
      if (customer){
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.dateOfBirth = customer.dateOfBirth;
        this.username = customer.username;
        this.password = customer.password;
        if (this.dateOfBirth){
          const date = this.dateOfBirth.split('-');
          this.year = +date[0];
          this.month = +date[1];
          this.day = +date[2];
        }
      }
    });
  }
  updateCustomerData(): void{
    const customerObj = {
      firstName : this.firstName,
      lastName : this.lastName,
      dateOfBirth : this.year + '-' + this.month + '-' + this.day,
      username : this.username,
      password : this.password
    };
    this.customerService.updateCustomer(+this.id, customerObj).subscribe( () => {
      this.router.navigate(['/customers']);
    });
  }
  createNewCustomer(): void{
    const customerObj = {
      firstName : this.firstName,
      lastName : this.lastName,
      dateOfBirth : this.year + '-' + this.month + '-' + this.day,
      username : this.username,
      password : this.password
    };
    this.customerService.createNewCustomer(customerObj).subscribe( () => {
      this.router.navigate(['/customers']);
    });
  }

}
