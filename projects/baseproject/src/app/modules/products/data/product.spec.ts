import { Product } from './product';

describe('Product', () => {
  it('should create an instance with name', () => {
    let obj = new Product({'name': 'Item1'});
    expect(obj).toBeTruthy();
    expect(obj.name).toEqual('Item1');
  });
  it('should create an instance with id and name', () => {
    let obj = new Product({'id': 1, 'name': 'Item1'});
    expect(obj).toBeTruthy();
    expect(obj.id).toBe(1);
    expect(obj.name).toBe('Item1');
    expect(obj.description).toBeUndefined();
  });
});
