import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <p class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
      <span class="text-xl">My Store</span>
      <app-primary-button [label]="'Cart ('+cartService.cart().length+')'" (btnClicked)="showButtonClicked()"/>
    </p>
  `,
  styles: `
  .header{
    background-color:rgb(18, 119, 220);
    color:white;
    padding:1rem
  }
  `
})
export class HeaderComponent {
  // signals
  cartService = inject(CartService)
  // functions
  showButtonClicked() {
    console.log("Button clicked!");
  }
}
