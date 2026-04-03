import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart = {
    items: [{ id: 1, product: 'Laptop', quantity: 1 }],
  };

  increaseQty(){
    this.cart.items[0].quantity++;
  }
}
