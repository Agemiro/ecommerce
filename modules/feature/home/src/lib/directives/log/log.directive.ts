import { ProductCardComponent } from '@ecommerce/product-ui';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[ecommerceLog]',
  standalone: true,
})
export class LogDirective implements OnInit {
  @Output() doubleClick = new EventEmitter<void>();

  router = inject(Router);
  productCardComponent = inject(ProductCardComponent);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);

  @HostListener('click', ['$event'])
  onClick(): void {
    this.router.navigate(['product', this.productCardComponent.product.id]);
  }

  @HostListener('dblclick', ['$event'])
  onDoubleClick(): void {
    this.doubleClick.emit();
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }
}
