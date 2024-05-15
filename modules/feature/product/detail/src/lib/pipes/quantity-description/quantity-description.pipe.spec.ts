import { QuantityDescriptionPipe } from './quantity-description.pipe';

describe('QuantityDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new QuantityDescriptionPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return unavailable product text', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(0);
    expect(result).toBe('product unavailable');
  });

  it('should return text from only one product', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(1);
    expect(result).toBe('last unit');
  });

  it('should return text from many products', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(12);
    expect(result).toBe('12 units available');
  });
});
