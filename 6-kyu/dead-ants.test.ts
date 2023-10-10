import { deadAntCount } from './dead-ants';

describe('Testing Dead Ants', () => {
  test('should return 0', () => {
    expect(deadAntCount('ant ant ant ant')).toBe(0);
  });
  test('should return 0', () => {
    expect(deadAntCount('')).toBe(0);
  });
  test('should return 2', () => {
    expect(deadAntCount('ant anantt aantnt')).toBe(2);
  });
  test('should return 1', () => {
    expect(deadAntCount('ant ant .... a nt')).toBe(1);
  });
  test('should return 3', () => {
    expect(deadAntCount('...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t')).toBe(3);
  });
});
