import { leastSteps } from './least-steps-to-int';

describe('Testing Least Steps To Int', () => {
  test('should return 0', () => {
    expect(leastSteps(1)).toBe(0);
  })
  test('should return 4', () => {
    expect(leastSteps(12)).toBe(4);
  })
  test('should return 4', () => {
    expect(leastSteps(16)).toBe(4);
  })
  test('should return 9', () => {
    expect(leastSteps(71)).toBe(9);
  })
})