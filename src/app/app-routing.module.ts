import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component'

import { CartComponent } from './components/cart/cart.component'
import { OrdersComponent } from './components/orders/orders.component'

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'



const routes: Routes = [
  {path: '', component: ProductListComponent}, // object encapsulate , root path
  {path: 'product-details/:id', component: ProductDetailsComponent}, //new object , wz new path...

  {path: 'cart', component: CartComponent},
  {path: 'orders', component: OrdersComponent },

  //{path: '**', redirectTo: '/'}, // wild card (redirectTo homepage automatically)
  {path: '**',  component: PageNotFoundComponent}, // wild card (with 404-page)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
