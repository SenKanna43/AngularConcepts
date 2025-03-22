import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName = 'John Doe';
  isDarkMode = false;
  cardColor = 'white';
  textColor = 'black';

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.cardColor = this.isDarkMode ? '#333' : 'white';
    this.textColor = this.isDarkMode ? 'white' : 'black';
  }
}
