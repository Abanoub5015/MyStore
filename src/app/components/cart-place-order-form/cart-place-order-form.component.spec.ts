import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPlaceOrderFormComponent } from './cart-place-order-form.component';

describe('CartPlaceOrderFormComponent', () => {
  let component: CartPlaceOrderFormComponent;
  let fixture: ComponentFixture<CartPlaceOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPlaceOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPlaceOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
