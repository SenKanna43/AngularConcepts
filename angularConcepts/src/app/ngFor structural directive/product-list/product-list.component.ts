import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop', price: 75000 },
    { id: 2, name: 'Smartphone', price: 30000 },
    { id: 3, name: 'Headphones', price: 5000 }
  ];
}
