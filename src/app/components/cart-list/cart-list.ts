import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  imports: [CommonModule],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.css',
})
export class CartList {
  cartService = inject(CartService);
  cartItems:any = [];
  totalPrice = 0;
  constructor() {}
  ngOnInit() {
    this.cartService.cartItem$.subscribe((newCartItems) => {
      this.cartItems = newCartItems;
    });
    this.cartService.totalPrice$.subscribe((newTotal) => {
      this.totalPrice = newTotal;
    });
  }
}
