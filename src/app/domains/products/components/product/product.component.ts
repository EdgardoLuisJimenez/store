import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCard = new EventEmitter();

  addToCardHandler() {
    this.addToCard.emit(this.product);
  }
}
