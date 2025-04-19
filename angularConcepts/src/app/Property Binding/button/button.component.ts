import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  //change the value to false to see the output
  isDisabled = false;
}
