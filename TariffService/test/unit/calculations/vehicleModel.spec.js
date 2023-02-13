const getValueModel = require('../../../calculations/vehicleModel');
describe('Calculo del valor del modelo para luego homologar', () => {
    const MODELVEHICLE = 2015;
    test('Deberia calcular el valor homologable del modelo', () => {
        const model = getValueModel(MODELVEHICLE);
        expect(model).toBeGreaterThanOrEqual(8);
        expect(typeof model).toBe('number');
    })
})