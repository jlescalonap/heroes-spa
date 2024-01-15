import { types } from '../../../src/auth';

describe('Pruebas de los Types', () => {
  test('Debe retornar estos types', () => {
    expect(types).toEqual({ login: '[Auth] Login', logout: '[Auth] Logout' });
  });
});
