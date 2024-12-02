import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'ecommerce-auth-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, MatCard],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
}
