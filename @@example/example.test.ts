import { sum } from './example';

describe('Testing Sum Function', () => {
  test('should return 7', () => {
    expect(sum(5, 2)).toBe(7);
  });
  test('should return 9', () => {
    expect(sum(8, 1)).toBe(9);
  });
});
