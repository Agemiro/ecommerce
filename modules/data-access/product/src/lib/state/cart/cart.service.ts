import { Product } from './../../models/product.model';
import { Injectable, signal, computed } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Form with Observables
  // cartSubject$ = new BehaviorSubject<Product[]>([]);
  // cart$ = this.cartSubject$.asObservable();
  // quantity$ = this.cart$.pipe(map((products) => products.length));
  // addToCart(product: Product) {
  //   const currentCart = this.cartSubject$.getValue();
  //   this.cartSubject$.next([...currentCart, product]);
  // }

  // Form with Signals
  private cartSignal = signal<Product[]>([]);
  cart = this.cartSignal.asReadonly();
  quantity = computed(() => this.cart().length);

  addToCart(product: Product): void {
    this.cartSignal.update((products) => [...products, product]);
  }
}
