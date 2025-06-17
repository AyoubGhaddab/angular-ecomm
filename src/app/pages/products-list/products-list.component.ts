import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import sampleProducts from '../../data/products.json';
@Component({
  selector: 'app-products-list',
  imports: [],
  template: `
    <div class="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      @for(item of products(); track item.id) {
        <div>{{item.title}}</div>
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>(sampleProducts)
}
