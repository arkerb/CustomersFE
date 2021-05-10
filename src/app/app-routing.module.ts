import { CustomerViewComponent } from './components/customer-view/customer-view.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full'},
  { path: 'customers', component: CustomersComponent},
  { path: 'customers/:id', component: CustomerViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
