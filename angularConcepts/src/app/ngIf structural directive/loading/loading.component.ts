import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  isLoading = true; // Initially true, simulating data loading

  constructor() {
    // Simulate data loading with a timeout
    setTimeout(() => {
      this.isLoading = false; // After 3 seconds, data is loaded
    }, 3000);
  }
}
