const getPTHFrequencyAge = require('../../../conversions/convertPTHFrequencyAge')
const ValidationErrorHomologate = require('../../../exceptions/ValidationErrorHomologate')

describe('Homologacion de fecah de nacimiento PTH frecuencia', () => {
    test('Deberia retornar el valor homologado de forma exitosa', () => {
        const result = getPTHFrequencyAge('1998-12-31');
        expect(result).toBe(1);
        expect(typeof result).toBe('number');
    })

    test('Deberia lanzar error cuando no encuentra un valor para la edad', () => {
        const t = () => {
            getPTHFrequencyAge('1000-12-31');
        };
        expect(t).toThrow(ValidationErrorHomologate);
        expect(t).toThrow("El valor de la fecha de nacimiento no puede ser homologado");
    })
})