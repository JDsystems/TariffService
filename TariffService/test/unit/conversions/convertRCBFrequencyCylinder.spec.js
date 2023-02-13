const getRCBFrequencyCylinder = require('../../../conversions/convertRCBFrequencyCylinder')
const ValidationErrorHomologate = require('../../../exceptions/ValidationErrorHomologate')

describe('Homologacion de cilindraje RCB frecuencia', () => {
    test('Deberia retornar el valor homologado de forma exitosa', () => {
        const result = getRCBFrequencyCylinder(110);
        expect(result).toBe(1);
        expect(typeof result).toBe('number');
    })

    test('Deberia lanzar error cuando no encuentre un valor para el cilindraje', () => {
        const t = () => {
            getRCBFrequencyCylinder(111);
        };
        expect(t).toThrow(ValidationErrorHomologate);
        expect(t).toThrow("El valor del cilindraje no puede ser homologado");
    })
})