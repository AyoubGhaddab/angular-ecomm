import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <p class="text-3xl font-bold underline">
      {{title()}}
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
  title = signal('angular-ecomm');
}
