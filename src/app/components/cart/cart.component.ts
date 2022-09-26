import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Form } from '../../models/Form';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCarts();
  }

  clearCartsbtn(): void {
    this.cartService.clearCarts();
    this.cartList = []; //clear cartList array locally
    //alert("All Cart Cleared!");
  }

  remove_cartItem_parent(product_camefrom_i: Product): void {
    this.cartList = this.cartService.remove_cartItem(product_camefrom_i);
  }

  //sum card-items
  TotalPrice() {
    var totalPrice = 0;
    for (let cartItem of this.cartList) {
      totalPrice += cartItem.price * cartItem.quantity;
    }
    return totalPrice;
  }

  //came from [cart-place-order-form]
  submitForm_parent(form_camefrom_i: Form) {
    this.orderService.addToOrder(form_camefrom_i);
    this.router.navigate(['/orders']);
    this.cartService.clearCarts_after_submitOrder();
  }
}
