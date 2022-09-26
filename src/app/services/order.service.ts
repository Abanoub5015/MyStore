import { Injectable } from '@angular/core';
import { Form } from '../models/Form'


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  MyForm: Form;
 
  constructor() {
    this.MyForm = {
      name:'',
      address: '',
      creditCard: '',
      total_i: '',
    }
  }

  getOrder(){
    return this.MyForm; 
  }

  addToOrder(form_camefrom_cartComponent: Form){
      this.MyForm = form_camefrom_cartComponent;
      return this.MyForm;
    }
   
}
