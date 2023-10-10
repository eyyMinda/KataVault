import { insertMissingLetters } from './missing-alphabet';

describe('Testing Missing Alphabet', () => {
  test('shorter', () => {
    expect(insertMissingLetters('holly')).toBe('hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ');
  });
  test('short', () => {
    expect(insertMissingLetters('hello')).toBe('hIJKMNPQRSTUVWXYZeFGIJKMNPQRSTUVWXYZlMNPQRSTUVWXYZloPQRSTUVWXYZ');
  });
  test('longer', () => {
    expect(insertMissingLetters('slwcmqpkqepgooqfpsntzozwrdg')).toBe('sUVXYlUVXYwXYcHIJUVXYmUVXYqUVXYpUVXYkUVXYqeHIJUVXYpgHIJUVXYoUVXYoqfHIJUVXYpsnUVXYtUVXYzozwrUVXYdHIJUVXYg');
  });
});
