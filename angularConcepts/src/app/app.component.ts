import { Component } from '@angular/core';
import { EmployeeComponent } from "./interpolation/employee/employee.component";
import { ButtonComponent } from "./Property Binding/button/button.component";

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularConcepts';
}
