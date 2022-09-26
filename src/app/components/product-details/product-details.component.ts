import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product'
import { CartService } from '../../services/cart.service'
import { ProductDetailsService } from '../../services/product-details.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 productDetails: Product;

  constructor(private productDetailsService: ProductDetailsService, private cartService: CartService) {
    this.productDetails = {
      id:1,
      name:'',
      img: '',
      price: 1,
      quantity: 1, 
      description:'',
    }
  }

  ngOnInit(): void {
    this.productDetails = this.productDetailsService.getProductDetails();
  }

  plus_btn(productDetails: Product)  {
    productDetails.quantity += 1;
    return productDetails;
  }
  
  minus_btn(productDetails: Product) {
    productDetails.quantity -= 1;
    return productDetails;
  }

  //s = server(CartService)
  addToCart_parent_server(product_sendto_s: Product):void{
    this.cartService.addToCarts(product_sendto_s);
  }

}
