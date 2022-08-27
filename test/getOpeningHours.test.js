const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se nenhum argumento retorna o objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Retorna se passado Monday e 09:00-AM retorna The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Retorna se passado Tuesday e 09:00-AM retorna The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Retorna se passado Wednesday e 09:00-PM retorna The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Retorna se passado Thu e 09:00-AM retorna um erro', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Retorna se passado Friday e 09:00-ZM retorna um erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Retorna se passado Saturday e C9:00-AM retorna um erro', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Retorna se passado Sunday e 09:c0-AM retorna um erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM ')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Retorna se passado Monday e 13:00-AM retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Retorna se passado Tuesday e 09:60-AM retorna um erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
