//const jest = require('jest');
const request = require('supertest');
const TariffTestDataBuilder = require('./tariffTestDataBuilder');

const HOST = 'http://127.0.0.1:7071/api';

describe('GET /TariffService', () => {

     test('Deberia retornar los valores de las primas de forma exitosa', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(200);
        expect(data.data).toHaveProperty('annualPrimeValue')
        expect(data.data).toHaveProperty('monthlyPrimeValue')

    })
 
     test('Deberia lanzar error cuando no reciba el cilindraje', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder().buildRequestWithout('cylinder');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(422);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message', 'El cilindraje del vehiculo es requerido')

    }); 

    test('Deberia lanzar error cuando no reciba el modelo', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder().buildRequestWithout('model');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(422);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message', 'El modelo del vehiculo es requerido')

    }); 

     test('Deberia lanzar error cuando no reciba la fecha de nacimeinto del propietario', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder().buildRequestWithout('birthdate');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(422);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message', 'La fecha de nacimiento es requerida')

    });
 
    test('Deberia lanzar error cuando no reciba la ciudad de circulacion', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder().buildRequestWithout('circulationCity');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(422);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message', 'La ciudad de circulacion es requerida')

    });

     test('Deberia retornar error con cilidraje invalido', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setCylinder(1000);
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(data.error).toHaveProperty('status', 400)
        expect(data.error).toHaveProperty('name','ValidationErrorHomologate')
        expect(data.error).toHaveProperty('message')

    });

    test('Deberia retornar error cuando el cilindraje no sea un valor numerico', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setCylinder('100J');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message')

    });

    test('Deberia retornar error con modelo invalido', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setModel(202);
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(422);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message')

    });

    test('Deberia retornar error cuando el modelo no sea un valor numerico', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setModel('202H');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(422);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message')

    });

    test('Deberia retornar error con modelo antiguo', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setModel(1550);
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(data.error).toHaveProperty('status', 400)
        expect(data.error).toHaveProperty('name','ValidationErrorHomologate')
        expect(data.error).toHaveProperty('message')

    });

    test('Deberia retornar error con fecha de nacimiento invalida', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setBirthDate('1998-10-32');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(422);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message')

    });

    test('Deberia retornar error con fecha de nacimiento muy antigua', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setBirthDate('1850-10-30');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(data.error).toHaveProperty('status', 400)
        expect(data.error).toHaveProperty('name','ValidationErrorHomologate')
        expect(data.error).toHaveProperty('message')

    });

    test('Deberia retornar error con formato de fecha de nacimiento invalido', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setBirthDate('30-10-1998');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(response.status).toBe(422);
        expect(data.error).toHaveProperty('status', 422)
        expect(data.error).toHaveProperty('name','ValidationErrorRequest')
        expect(data.error).toHaveProperty('message')

    });

    test('Deberia retornar error con ciudad de circulacion invalida', async () => {
        let tariffTestBuilderExit = new TariffTestDataBuilder();
        tariffTestBuilderExit.setCirculationCity('barranquillllllla');
        const response = await request(HOST)
                        .get(`/TariffService?${tariffTestBuilderExit.buildRequest()}`)
                        .send()
        const data = JSON.parse(response.text);
        expect(data.error).toHaveProperty('status', 400)
        expect(data.error).toHaveProperty('name','ValidationErrorHomologate')
        expect(data.error).toHaveProperty('message')

    });
})

