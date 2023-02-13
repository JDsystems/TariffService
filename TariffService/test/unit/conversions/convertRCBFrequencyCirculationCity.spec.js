const getRCBFrequencyCirculationCity = require('../../../conversions/convertRCBFrequencyCirculationCity')
const ValidationErrorHomologate = require('../../../exceptions/ValidationErrorHomologate')

describe('Homologacion de RCB frecuecia ciudad de circulacion RCB frecuencia', () => {
    test('Deberia retornar el valor homologado de forma exitosa', () => {
        const result = getRCBFrequencyCirculationCity('medellin');
        expect(result).toBe(0.512);
        expect(typeof result).toBe('number');
    })

     test('Deberia lanzar error cuando no encuentre un valor para la ciudad', () => {
        const t = () => {
            getRCBFrequencyCirculationCity('medayork');
        };
        expect(t).toThrow(ValidationErrorHomologate);
        expect(t).toThrow("El valor de la ciudad de circulacion no puede ser homologado");
    }) 
})