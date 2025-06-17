import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import sampleProducts from '../../data/products.json';
import { ProductCardComponent } from "./product-card/product-card.component";
@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      @for(product of products(); track product.id) {
        <app-product-card [product]="product"/>
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>(sampleProducts)
}
