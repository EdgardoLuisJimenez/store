import {
  Component,
  Input,
  SimpleChange,
  SimpleChanges,
  signal,
} from '@angular/core';
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
  total = signal(0);

  togglesideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.priceToPay());
    }
  }

  priceToPay() {
    const initialValue = 0;
    return this.cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    );
  }
}
