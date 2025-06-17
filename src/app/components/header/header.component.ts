import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <p class="bg-slate-100 px-4 py-3 shadow-md">
      <span>My Store</span>
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
}
