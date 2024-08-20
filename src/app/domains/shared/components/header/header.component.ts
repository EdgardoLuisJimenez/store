import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({ required: true }) cart: Product[] = [];

  togglesideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

  priceToPay() {
    const initialValue = 0;
    return this.cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    );
  }
}
