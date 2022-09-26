import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product'
import { CartService } from '../../services/cart.service'


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cart_i: Product;
  @Output() remove_cartItem_o: EventEmitter<Product> = new EventEmitter;

  constructor(private cartService: CartService) { 
    this.cart_i = {
      id:1,
      name:'',
      img: '',
      price: 1,
      quantity: 1, 
      description:'',
    }
  }

  ngOnInit(): void {
  }

  remove_cartItem_btn(cart_i:Product):void{
    this.remove_cartItem_o.emit(cart_i);
  }


  plus_btn(productDetails: Product)  {
    productDetails.quantity += 1;
    return productDetails;
  }
  
  minus_btn(productDetails: Product) {
    productDetails.quantity -= 1;
    return productDetails;
  }
  

}
