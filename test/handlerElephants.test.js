const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se count volta um numero inteiro', () => {
    const expected = 4;
    const actual = handlerElephants('count');

    expect(actual).toEqual(expected);
  });
  it('testa se names retorna um array de nomes contendo Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('testa se averageAge retorna um numero proximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('testa se location retorna a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('testa se availability retorna um array de dias sem Monday', () => {
    expect(handlerElephants('availability')).not.toBe('Monday');
  });
  it('testa se popularity retorna um numero maior que 5', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('testa se retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('testa se um objeto vazio retorna uma string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('testa se retorna null', () => {
    expect(handlerElephants('idade')).toEqual(null);
  });
});
