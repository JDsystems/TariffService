const ValidationErrorHomologate = require('../exceptions/ValidationErrorHomologate')

const RCBFrequencyCirculationCities = [
    {name: 'medellin', point: 0.512},
    {name: 'bogota', point: 0.622},
    {name: 'cali', point: 0.539},
    {name: 'barranquilla', point: 0.3318},
]

module.exports = (city) => {
    const result = RCBFrequencyCirculationCities.filter(
        item => item.name === city
        )
    if(result[0] == undefined){
        throw new ValidationErrorHomologate('El valor de la ciudad de circulacion no puede ser homologado',400)
    }
    return result[0]?.point
}