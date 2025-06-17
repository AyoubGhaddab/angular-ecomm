import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);


  addToCart(product: Product) {
    const currentCart = this.cart();
    const existingProduct = currentCart.find(item => item.id === product.id);

    if (existingProduct) {
      // If the product already exists in the cart, increase its quantity
      existingProduct.stock = (existingProduct.stock || 0) + 1;
    } else {
      // If it's a new product, add it to the cart
      this.cart.set([...currentCart, { ...product, stock: 1 }]);
    }
  }

  constructor() { }
}
