import { Product, ProductSearchService } from '@ecommerce/product-data-access';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
import { Observable, switchMap } from 'rxjs';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

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

  // converts an observable into a signal
  productSignal = toSignal(this.product$);

  // count = signal(0);

  cart = signal<Product[]>([]);
  quantity = computed(() => this.cart().length);
  // converts a signal into an observable
  quantityObservable$ = toObservable(this.quantity);

  constructor() {
    effect(() => {
      // every time you change the trolley, it does something in here
    });
  }

  addToCart(product: Product): void {
    // this.count.set(1);
    // this.count.update((value) => value + 1);
    this.cart.update((value) => [...value, product]);
  }
}
