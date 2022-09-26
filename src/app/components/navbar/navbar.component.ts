import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'
import { Product } from '../../models/Product'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartList: Product[] = [];

  constructor(private cartService: CartService) { 
   
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCarts();
  }

}
