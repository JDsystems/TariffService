const ValidationErrorHomologate = require('../exceptions/ValidationErrorHomologate')

const RCBSeverityCylinder = [
    { value: 110, point: 0.8132468},
    { value: 125, point: 0.8132468},
    { value: 900, point: 1}
]

module.exports = (cylinder)  => {
    const result = RCBSeverityCylinder.filter(item => item.value === cylinder);

    if(result[0] == undefined){
        throw new ValidationErrorHomologate('El valor del cilindraje no puede ser homologado',400)
    }
    return result[0]?.point;
}