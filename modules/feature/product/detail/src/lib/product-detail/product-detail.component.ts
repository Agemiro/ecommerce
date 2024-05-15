import { Product, ProductSearchService } from '@ecommerce/product-data-access';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
import { Observable, switchMap } from 'rxjs';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';

@Component({
  selector: 'ecommerce-product-detail',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, QuantityDescriptionPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);

  product$: Observable<Product> = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
