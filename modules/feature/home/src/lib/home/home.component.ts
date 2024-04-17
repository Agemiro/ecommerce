import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RecommendedProductsService } from '@ecommerce/product-data-access';

@Component({
  selector: 'ecommerce-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$ = this.recommendedProductsService.getProducts();

  constructor(private recommendedProductsService: RecommendedProductsService) {}
}
