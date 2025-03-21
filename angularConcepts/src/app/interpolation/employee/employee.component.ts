import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employee = {
    name: 'John Doe',
    age: 30,
    designation: 'Software Engineer',
    salary: 70000,
  };
}
