import { addArrays } from './sum-two-arrays';

describe('Testing Sum Two Arrays', () => {
  test('should return [1, 3, 4]', () => {
    expect(addArrays([6, 7], [6, 7])).toStrictEqual([1, 3, 4]);
  });
  test('should return [3, 4, 1]', () => {
    expect(addArrays([3, 2, 9], [1, 2])).toStrictEqual([3, 4, 1]);
  });
  test('should return [5, 9, 6]', () => {
    expect(addArrays([4, 7, 3], [1, 2, 3])).toStrictEqual([5, 9, 6]);
  });
  test('should return [5, 7, 7]', () => {
    expect(addArrays([1], [5, 7, 6])).toStrictEqual([5, 7, 7]);
  });
});
