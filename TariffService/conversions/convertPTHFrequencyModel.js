const getAntiguatyVehicle = require('../calculations/vehicleModel')
const ValidationErrorHomologate = require('../exceptions/ValidationErrorHomologate')
const PTHFrequencyModel = [
    { value: -1, point:	1.1743862},
    { value: 0, point:	1},
    { value: 1, point:	0.6713316},
    { value: 2, point:	0.4813167},
    { value: 3, point:	0.4813167},
    { value: 4, point:	0.3533544},
    { value: 5, point:	0.3533544},
    { value: 6, point:	0.3533544},
    { value: 7, point:	0.3533544},
    { value: 8, point:	0.3533544},
    { value: 9, point:	0.3533544},
    { value: 10, point:	0.3533544},
    { value: 11, point:	0.3533544},
    { value: 12, point:	0.3533544},
    { value: 13, point:	0.3533544},
    { value: 14, point:	0.3533544},
    { value: 15, point:	0.3533544},
    { value: 16, point:	0.3533544},
    { value: 17, point:	0.3533544},
    { value: 18, point:	0.3533544},
    { value: 19, point:	0.3533544},
    { value: 20, point:	0.3533544},
    { value: 21, point:	0.3533544},
    { value: 22, point:	0.3533544},
    { value: 23, point:	0.3533544},
    { value: 24, point:	0.3533544},
    { value: 25, point:	0.3533544},
    { value: 26, point:	0.3533544},
    { value: 27, point:	0.3533544},
    { value: 28, point:	0.3533544},
    { value: 29, point:	0.3533544},
    { value: 30, point:	0.3533544},
]

module.exports = (vehicleModel) => {
    const yearsAntiguaty = getAntiguatyVehicle(vehicleModel);

    const result = PTHFrequencyModel.filter(item => item.value === yearsAntiguaty);
    if(result[0] == undefined){
        throw new ValidationErrorHomologate('El valor del modelo no puede ser homologado',400)
    }
    return result[0]?.point;
}