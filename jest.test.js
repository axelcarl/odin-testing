import { capitalize, reverseString, calculator, cipher, analyzeArray } from './javascript';

test('capitalize the word hey', () => {
  expect(capitalize('hey')).toBe('Hey');
});

test('reverse string hey', () => {
  expect(reverseString('hey')).toBe('yeh');
});

test('multiply numbers', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
})

test('caesar cipher', () => {
  expect(cipher('qwertyuiopasdfghjklzxcvbnm', 'ABC')).toBe('QWE');
})

test('analyze array', () => {
  expect(analyzeArray([1,2,3,4,5]).average).toBe(3)
})