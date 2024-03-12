import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutModule } from '@ecommerce/layout';
import { ProductSearchComponent } from '@ecommerce/feature/product-search';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
  ],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}
