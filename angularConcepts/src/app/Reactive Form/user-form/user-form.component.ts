import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormReactiveComponent {

    myForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    onSubmit() {
      if (this.myForm.invalid) {
        this.myForm.markAllAsTouched();
        return;
      }
      console.log(this.myForm.value);
    }
}
