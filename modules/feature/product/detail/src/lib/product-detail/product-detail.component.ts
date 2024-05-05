import { Product, ProductSearchService } from '@ecommerce/product-data-access';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'ecommerce-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);

  product$: Observable<Product> = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
