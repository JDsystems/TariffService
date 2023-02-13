const ValidationErrorHomologate = require('../exceptions/ValidationErrorHomologate')

const RCBFrequencyCylinder = [
    { value: 110 , point: 1},
    { value: 125 , point: 1},
    { value: 900 , point: 0.75}
];

module.exports = (cylinder)  => {
    const result = RCBFrequencyCylinder.filter(item => item.value === cylinder)

    if(result[0] == undefined){
        throw new ValidationErrorHomologate('El valor del cilindraje no puede ser homologado',400)
    }
    return result[0]?.point;
}