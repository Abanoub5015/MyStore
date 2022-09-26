import { Injectable } from '@angular/core';
import { Product } from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  productDetails: Product;
 
  constructor() {
    this.productDetails = {
      id:1,
      name:'',
      img: '',
      price: 1,
      quantity: 1, 
      description:'',
    }
  }

  getProductDetails(){
    return this.productDetails; 
  }

  addToProductDetails(productDetails_camefrom_productList: Product){
      this.productDetails = productDetails_camefrom_productList;
      return this.productDetails;
    }
   
  }

