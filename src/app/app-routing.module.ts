import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view-product/view/view.component';
import { HomeComponent } from './home/home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:'shop', component: HomeComponent},
  {path:'view', component: ViewComponent},
  {path:'cart', component: CartComponent},
  {path:'payment', component: PaymentComponent},
  {path:'', redirectTo:'shop',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
