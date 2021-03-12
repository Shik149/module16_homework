const getPercents = require('./index.js');

test('10% from 10 should be 1', () => {
  expect(getPercents(10, 10)).toBe(1);
})

test('20% from 100 should be 20', () => {
  expect(getPercents(100, 20)).toBe(20);
})

test('0% from any number should be 0', () => {
  expect(getPercents(+(Math.random() * 100).toFixed(0), 0)).toBe(0);
})

test('100% from any number should be the same', () => {
  const number = +(Math.random() * 100)
  expect(getPercents(number, 100)).toBe(number);
})