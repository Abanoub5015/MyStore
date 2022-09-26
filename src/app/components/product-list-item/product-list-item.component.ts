import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
@Input() product_i: Product; // @Input() .. to get data from products components
@Output() addToCart_o: EventEmitter<Product> = new EventEmitter;  /* for parent component */  
@Output() openProductDetails_o: EventEmitter<Product> = new EventEmitter;


// Inject cart service into the constructor
constructor(private cartService: CartService) {
  this.product_i = {
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

plus_btn(product_i: Product)  {
  product_i.quantity += 1;
  return product_i;
}

minus_btn(product_i: Product) {
  product_i.quantity -= 1;
  return product_i;
}

addToCart_btn(product_i: Product): void{
  // Invoke addToCarts() from the cart service below
  // this.cartService.addToCarts(product_i);
  // alert('added to Carts'); */  
  this.addToCart_o.emit(product_i); 
}

openProductDetails_btn(product_i: Product): void{
  this.openProductDetails_o.emit(product_i)
}

}
