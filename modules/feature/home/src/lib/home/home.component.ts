import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedProductsService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';

@Component({
  selector: 'ecommerce-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$ = this.recommendedProductsService.getProducts();

  constructor(private recommendedProductsService: RecommendedProductsService) {}
}
