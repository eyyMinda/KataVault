import { expect, test } from 'vitest'
const { example } = require('./index');

test('Basic Test', () => {
  expect(example("holly")).toBe("");
})
test('Basic Test 2', () => {
  expect(example("hello")).toBe("");
})
test('Basic Test 3', () => {
  expect(example("slwcmqpkqepgooqfpsntzozwrdg")).toBe("");
})
