const regexModel = /^[0-9]{4}$/;
const regexDate = /^\d{2,4}\-\d{1,2}\-\d{1,2}$/;


const ValidationErrorRequest = require('../exceptions/ValidationErrorRequest')

module.exports = (req) => {
    if(!req.cylinder){
        throw new ValidationErrorRequest('El cilindraje del vehiculo es requerido', 422);
    }

    if(!req.model){
        throw new ValidationErrorRequest('El modelo del vehiculo es requerido', 422);
    }

    if(!req.birthdate){
        throw new ValidationErrorRequest('La fecha de nacimiento es requerida', 422);
    }

    if(!req.circulationCity){
        throw new ValidationErrorRequest('La ciudad de circulacion es requerida', 422);
    }


    if(isNaN(req.cylinder)){
        throw new ValidationErrorRequest('El cilindraje debe ser un valor numerico', 422);
    }

    if(isNaN(req.model)){
        throw new ValidationErrorRequest('El modelo del vehiculo debe ser un valor numerico', 422);
    }

    if(!regexModel.test(req.model)){
        throw new ValidationErrorRequest('El modelo no es válido, debe tener el formato 0000', 422);
    }

    if(new Date(req.birthdate).toString() === 'Invalid Date'){
        throw new ValidationErrorRequest('La fecha no es válida', 422);
    }

    if(!req.birthdate.match(regexDate)){
        throw new ValidationErrorRequest('EL formato de fecha no es válido, debe ser yyyy-mm-dd', 422);
    }


}