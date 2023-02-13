const ValidationErrorHomologate = require('../exceptions/ValidationErrorHomologate')

const PTHFrequencyCirculationCities = [
    {name: 'medellin', point: 1},
    {name: 'bogota', point: 0.737933},
    {name: 'cali', point: 0.7},
    {name: 'barranquilla', point: 0.52},
]

module.exports = (city) => {
    const result = PTHFrequencyCirculationCities.filter(
        item => item.name === city.toString().toLowerCase()
        )
    if(result[0] == undefined){
        throw new ValidationErrorHomologate('El valor de la ciudad de circulacion no puede ser homologado',400)
    }
    return result[0]?.point

}