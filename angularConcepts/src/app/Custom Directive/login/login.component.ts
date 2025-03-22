import { Component } from '@angular/core';
import  { AutoFocusDirective} from '../auto-focus.directive'

@Component({
  selector: 'app-login',
  imports: [AutoFocusDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
