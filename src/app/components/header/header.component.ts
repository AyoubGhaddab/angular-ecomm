import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
    <p class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
      <button class="text-xl" routerLink="/">My Store</button>
      <app-primary-button 
      [label]="'Cart ('+cartService.cart().length+')'" 
      (btnClicked)="showButtonClicked()"
      routerLink="/cart"
      />
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
