import { stringBreakers } from './break-string';

describe('Testing String Breaker', () => {
  test('should return 5 strings', () => {
    expect(stringBreakers(5, 'This is an example string')).toBe('Thisi' + '\n' + 'sanex' + '\n' + 'ample' + '\n' + 'strin' + '\n' + 'g');
  });
  test('should return 6 strings', () => {
    expect(stringBreakers(8, 'cneor2j8bt3ci7uhermi7ir6mncwqv5jhpzfwf4a5fv68au')).toBe('cneor2j8\nbt3ci7uh\nermi7ir6\nmncwqv5j\nhpzfwf4a\n5fv68au');
  });
});
