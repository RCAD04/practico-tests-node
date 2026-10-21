import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { clasificar } from '../src/notas.js';

describe('clasificar', () => {
  test('3.99 da LIBRE (justo debajo del límite 4)', () => {
    assert.equal(clasificar(3.99), 'LIBRE');
  });

  test('4 da REGULAR (límite exacto)', () => {
    assert.equal(clasificar(4), 'REGULAR');
  });

  test('5.99 da REGULAR (justo debajo del límite 6)', () => {
    assert.equal(clasificar(5.99), 'REGULAR');
  });

  test('6 da PROMOCIONA (límite exacto)', () => {
    assert.equal(clasificar(6), 'PROMOCIONA');
  });

  test('10 da PROMOCIONA (máximo válido)', () => {
    assert.equal(clasificar(10), 'PROMOCIONA');
  });

  test('11 lanza RangeError (fuera de rango)', () => {
    assert.throws(() => clasificar(11), RangeError);
  });
});