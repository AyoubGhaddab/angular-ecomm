import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl  hover:opacity-90" (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  // inputs
  label = input<string>('');
  // events
  btnClicked = output<void>();
  // constructors
  constructor() {
    // Initialization logic can go here if needed
  }

}
