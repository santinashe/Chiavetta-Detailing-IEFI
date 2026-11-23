import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularTotales, cantidadValida } from '../recursos/js/calculos.js';

test('Total sin descuento', () => {
    assert.equal(calcularTotales(10000).total, 10850);
});

test('Total con descuento', () => {
    assert.equal(calcularTotales(10000, true).total, 9765);
});

test('Cantidad valida', () => {
    assert.equal(cantidadValida(2), true);
    assert.equal(cantidadValida(99), true);
});

test('Cantidad incorrecta', () => {
    assert.equal(cantidadValida(0), false);
    assert.equal(cantidadValida(100), false);
    assert.equal(cantidadValida(2.5), false);
});
