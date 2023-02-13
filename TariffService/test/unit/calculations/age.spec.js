const getAge = require('../../../calculations/age');
describe('Calculo de edad a partir de la fecha de nacimiento', () => {
    const DATEBIRTH = '1998-10-10';
    test('Deberia calcular la edad de forma exitosa', () => {
        const age = getAge(DATEBIRTH);
        expect(age).toBe(24);
        expect(typeof age).toBe('number');
    })
})