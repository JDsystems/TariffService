const getPTHFrequencyCirculationCity = require('../../../conversions/convertPTHFrequencyCirculationCity')
const ValidationErrorHomologate = require('../../../exceptions/ValidationErrorHomologate')

describe('Homologacion de PTH frecuencia ciudad de circulacion PTH frecuencia', () => {
    test('Deberia retornar el valor homologado de forma exitosa', () => {
        const result = getPTHFrequencyCirculationCity('medellin');
        expect(result).toBe(1);
        expect(typeof result).toBe('number');
    })

     test('Deberia lanzar error cuando no encuentre un valor para la ciudad', () => {
        const t = () => {
            getPTHFrequencyCirculationCity('medayork');
        };
        expect(t).toThrow(ValidationErrorHomologate);
        expect(t).toThrow("El valor de la ciudad de circulacion no puede ser homologado");
    }) 
})