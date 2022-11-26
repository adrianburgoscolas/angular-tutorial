import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.cartService.clearCart();
    this.cartService.setBarNumItems();
    window.alert(`
Your order has been submitted
Name: ${this.checkoutForm.value?.name}
Address: ${this.checkoutForm.value?.address}
${this.items.map((item:{name: string, price: number}) => item.name + " $" + item.price +"\n").join("")}
`);
    this.items = [];
    this.checkoutForm.reset();
  }

}
