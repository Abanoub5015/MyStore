import { Injectable } from '@angular/core';
import { Product } from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Product[] = [];
 

  constructor() { 
  }

  //methods / functions
  getCarts(){
    return this.cartList; //* to return updated cartList
  }

  addToCarts(cartItem: Product){
    if(this.cartList.includes(cartItem))
    {
      alert('this item is already added before!')
      return null; //*
    }
    else
    {
      this.cartList.push(cartItem);
      alert('added to Carts!');
      return this.cartList; //*
    }
   
  }

  clearCarts(){ //used in [ cart.component ]
    //this.cartList = [];
    this.cartList.length = 0;
    alert('All cart items have been removed!');
    return this.cartList; //*
  }

  clearCarts_after_submitOrder(){ //used in [ cart.component ]
    this.cartList.length = 0;
    alert('The order has been submitted successfully!');
    return this.cartList; //*
  }

  remove_cartItem(cartItem: Product){
    //this.cartList = this.cartList.filter(e => e !== cartItem);
    var index = this.cartList.indexOf(cartItem);
    if(index !== -1)
    {
      this.cartList.splice(index, 1);
      alert(cartItem.name + ' removed!');
    }
    return this.cartList; //*
  } 


}
