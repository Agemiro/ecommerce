import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce/layout';
import { ProductSearchComponent } from '@ecommerce/feature/product-search';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
  ],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}
