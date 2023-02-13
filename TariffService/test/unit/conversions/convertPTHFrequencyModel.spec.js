const getPTHFrequencyModel = require('../../../conversions/convertPTHFrequencyModel')
const ValidationErrorHomologate = require('../../../exceptions/ValidationErrorHomologate')
const CURRENTYEAR = new Date().getFullYear();
describe('Homologacion de modelo de vehiculo PTH frecuencia', () => {
    test('Deberia retornar el valor homologado de forma exitosa', () => {
        const result = getPTHFrequencyModel(CURRENTYEAR);
        expect(result).toBe(1);
        expect(typeof result).toBe('number');
    })

    //  test('Deberia lanzar excepcion cuando no encuetre un valor para el modelo', () => {
    //      expect(() => { getPTHFrequencyModel(20)}).toThrow(ValidationErrorHomologate);
    // }) 

    test('Deberia lanzar error cuando no encuetre un valor para el modelo', () => {
            const t = () => {
                getPTHFrequencyModel(20);
            };
            expect(t).toThrow(ValidationErrorHomologate);
            expect(t).toThrow("El valor del modelo no puede ser homologado");
          
   }) 
})