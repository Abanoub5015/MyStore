import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
import { Form } from '../../models/Form'


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  MyForm: Form;

  constructor(private orderService: OrderService) { 
    this.MyForm = {
      name:'',
      address: '',
      creditCard: '',
      total_i: '',
    }
  }

  ngOnInit(): void {
    this.MyForm = this.orderService.getOrder();
  }

}
