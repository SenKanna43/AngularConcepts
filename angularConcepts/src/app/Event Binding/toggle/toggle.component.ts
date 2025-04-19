import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  messageVisible : boolean = false;

  toggleMessage() {
    this.messageVisible = !this.messageVisible; // Toggle the message visibility
  }
}
