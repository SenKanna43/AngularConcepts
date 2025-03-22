import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems = signal([
    { name: 'Laptop', price: 50000, quantity: 1 },
    { name: 'Headphones', price: 3000, quantity: 2 },
  ]);

  // Computed Signal to calculate total price dynamically
  totalPrice = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

  addItem() {
    this.cartItems.set([
      ...this.cartItems(),
      { name: 'Mouse', price: 1500, quantity: 1 },
    ]);
  }

  removeItem(index: number) {
    this.cartItems.set(this.cartItems().filter((_, i) => i !== index));
  }
}
