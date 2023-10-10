import { expect, test } from 'vitest'
const { deadAntCount } = require('./index');

test('Basic Test', () => {
  expect(deadAntCount("ant ant ant ant")).toBe(0);
})
test('Basic Test 2', () => {
  expect(deadAntCount(null)).toBe(0);
})
test('Basic Test 3', () => {
  expect(deadAntCount("ant anantt aantnt")).toBe(2);
})
test('Basic Test 4', () => {
  expect(deadAntCount("ant ant .... a nt")).toBe(1);
})
test('Basic Test 5', () => {
  expect(deadAntCount("...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t")).toBe(3);
})