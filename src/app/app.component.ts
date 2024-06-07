import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce/layout';
import { ProductSearchComponent } from '@ecommerce/feature/product-search';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartComponent } from '@ecommerce/product-ui';
import { CartService } from '@ecommerce/product-data-access';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
    CartComponent,
  ],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  quantity = inject(CartService).quantity;
}
