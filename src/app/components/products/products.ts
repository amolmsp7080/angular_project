import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  httpClient = inject(HttpClient);
  cartService = inject(CartService);
  productArr: any = signal([]);
  isLoading = signal(false);

  ngOnInit() {}

  fetchProducts() {
    this.isLoading.set(true);
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((response) => {
      this.productArr.set(response);
      this.isLoading.set(false);
    });
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
