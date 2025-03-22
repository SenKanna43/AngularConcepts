import { Routes } from '@angular/router';
import { EmployeeComponent } from './interpolation/employee/employee.component';
import { ToggleComponent } from './Event Binding/toggle/toggle.component';
import { UserComponent } from './Two-way Data Binding/user/user.component';
import { LoadingComponent } from './ngIf structural directive/loading/loading.component';
import { ProductListComponent } from './ngFor structural directive/product-list/product-list.component';
import { ProfileComponent } from './Attribute Directive/profile/profile.component';
import { LoginComponent } from './Custom Directive/login/login.component';
import { CartComponent } from './signals/cart/cart.component';

export const routes: Routes = [
    { path: 'employee', component: EmployeeComponent},
    { path: 'toggle', component: ToggleComponent },
    { path: 'user', component: UserComponent },
    { path: 'loading', component: LoadingComponent },
    { path: 'product', component: ProductListComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent },
    { path: '', redirectTo: 'toggle', pathMatch: 'full' } // Default route
  ];