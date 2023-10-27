const { sum, inOneHour } = require('./my-code');

describe('math functions', () => {
  beforeAll(() => {
    console.log('before all');
  });
  beforeEach(() => {
    console.log('before each');
  });
  afterAll(() => {
    console.log('after all');
  });
  afterEach(() => {
    console.log('after each');
  });
  it('sum 2 numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

/* Neste teste é demonstrado como congelar/ignorar partes da função que podem ser mutáveis por algum motivo, ou seja, uma data, que muda a cada milisegundo precisa ser congelada, para que o cálculo em cima dessa data seja feito com precisão */
describe('time functions', () => {
  it('returns the timestamp for one hour ahead', () => {
    // Pega o Date.now e cria uma instancia congelada
    const realDateNow = Date.now.bind(global.Date);
    // Congela a data com o jest
    global.Date.now = jest.fn(() => 0);
    // Testa a função
    expect(inOneHour()).toBe(3600000);
    // Descongela a data
    global.Date.now = realDateNow;
  });
});
