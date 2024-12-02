import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-access';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'ecommerce-auth-form-password',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  authService = inject(AuthService);
  control = inject(AuthFormComponent).form.controls.password;
  emailValue = inject(AuthFormComponent).form.controls.email.value;
  router = inject(Router);

  login(): void {
    this.authService.setEmail(this.emailValue);
    this.router.navigate(['/']);
  }
}
