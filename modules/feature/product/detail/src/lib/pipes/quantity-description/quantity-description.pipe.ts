import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(quantity: number): string {
    if (quantity === 0) {
      return 'product unavailable';
    }
    if (quantity === 1) {
      return 'last unit';
    }
    return `${quantity} units available`;
  }
}
