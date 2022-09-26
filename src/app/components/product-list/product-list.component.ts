import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/Product';

import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductDetailsService } from '../../services/product-details.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription_to_destroy: Subscription = new Subscription;

  constructor(private router: Router, private productService: ProductService, private cartService: CartService, private productDetailsService: ProductDetailsService) {
  }

  ngOnInit(): void {
    this.subscription_to_destroy = this.productService.getProducts().subscribe(response =>{ //Subcribe to observable [in ProductService] (to get response (stream of data)) 
      this.products = response;
    });
  }

  //addToCart_parent(product_camefrom_i... Using [emit]
  addToCart_parent(product_camefrom_i: Product):void{
   this.cartService.addToCarts(product_camefrom_i);
  }

  openProductDetails_parent(product_camefrom_i: Product):void {
   this.productDetailsService.addToProductDetails(product_camefrom_i);
   this.router.navigate(['/product-details/'+product_camefrom_i.id]);
  }

  //unless using this one the [subscription (subscribe)] will stack to infinity and beyond😌
  ngOnDestroy(): void {
    this.subscription_to_destroy.unsubscribe();
  }

}

