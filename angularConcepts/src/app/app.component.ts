import { Component } from '@angular/core';
import { EmployeeComponent } from "./interpolation/employee/employee.component";
import { ButtonComponent } from "./Property Binding/button/button.component";
import { ToggleComponent } from "./Event Binding/toggle/toggle.component";
import { UserComponent } from "./Two-way Data Binding/user/user.component";
import { LoadingComponent } from "./ngIf structural directive/loading/loading.component";
import { ProductListComponent } from "./ngFor structural directive/product-list/product-list.component";
import { ProfileComponent } from "./Attribute Directive/profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent, ButtonComponent, ToggleComponent, UserComponent, LoadingComponent, ProductListComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularConcepts';
}
