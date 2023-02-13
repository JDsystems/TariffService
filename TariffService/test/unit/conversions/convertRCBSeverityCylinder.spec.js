const getRCBSeverityCylinder = require('../../../conversions/convertRCBSeverityCylinder')
const ValidationErrorHomologate = require('../../../exceptions/ValidationErrorHomologate')

describe('Homologacion de cilindraje RCB severidad', () => {
    test('Deberia retornar el valor homologado de forma exitosa', () => {
        const result = getRCBSeverityCylinder(900);
        expect(result).toBe(1);
        expect(typeof result).toBe('number');
    })

    test('Deberia lanzar error cuando no encuentre un valor para el cilindraje', () => {
        const t = () => {
            getRCBSeverityCylinder(111);
        };
        expect(t).toThrow(ValidationErrorHomologate);
        expect(t).toThrow("El valor del cilindraje no puede ser homologado");
    })
})