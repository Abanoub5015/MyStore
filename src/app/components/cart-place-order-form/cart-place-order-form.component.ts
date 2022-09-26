import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Form } from '../../models/Form';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-place-order-form',
  templateUrl: './cart-place-order-form.component.html',
  styleUrls: ['./cart-place-order-form.component.css'],
})
export class CartPlaceOrderFormComponent implements OnInit {
  name: string = '';
  address: string = '';
  creditCard: string = '';

  //for ngModelChange validation
  v_name: string = '';
  v_address: string = '';
  v_creditCard: string = '';

  myform = new FormGroup({
    name: new FormControl('', [Validators.minLength(3)]), //validateName
    address: new FormControl('', [Validators.minLength(6)]),
    creditCard: new FormControl('', [Validators.minLength(16)]),
  });

  @Input() total_i: any;
  @Output() submitForm_o: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    if (this.myform.invalid) return;

    const formData = {
      name: this.v_name,
      address: this.v_address,
      creditCard: this.v_creditCard,
      total_i: this.total_i,
    };
    //console.log(formData);
    this.submitForm_o.emit(formData);

    this.myform.reset(); //reset all data after send it
  }

  validateName(nameValue: string) {
    //ngModelChange
    this.v_name = nameValue;
    //console.log("name argument changed to " + this.v_name);
  }
  validateAddress(addressValue: string) {
    this.v_address = addressValue;
  }
  validateCreditCard(creditCardValue: string) {
    this.v_creditCard = creditCardValue;
  }
}
