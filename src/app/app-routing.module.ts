import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AllItemsComponent } from './all-items/all-items.component';


const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'cart', component: AllItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
