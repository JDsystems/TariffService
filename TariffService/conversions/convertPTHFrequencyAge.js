let getAge = require('../calculations/age')
const ValidationErrorHomologate = require('../exceptions/ValidationErrorHomologate')
const PTHFrecuenciaEdad = [
    { range: '16-18', point: 1 },
    { range: '19-21', point: 1 },
    { range: '22-24', point: 1 },
    { range: '25-27', point: 1 },
    { range: '28-30', point: 1 },
    { range: '31-33', point: 0.8837403 },
    { range: '34-36', point: 0.8837403 },
    { range: '37-39', point: 0.726392 },
    { range: '40-42', point: 0.726392 },
    { range: '43-45', point: 0.726392 },
    { range: '46-48', point: 0.726392 },
    { range: '49-51', point: 0.726392 },
    { range: '52-54', point: 0.726392 },
    { range: '55-57', point: 0.726392 },
    { range: '58-60', point: 0.726392 },
    { range: '61-63', point: 0.726392 },
    { range: '64-66', point: 0.726392 },
    { range: '67-69', point: 0.726392 },
    { range: '70-72', point: 0.726392 },
    { range: '73-75', point: 0.726392 },
    { range: '76-78', point: 0.726392 },
    { range: '79-81', point: 0.726392 }
]
module.exports = (dateInput) => {
    const age = getAge(dateInput);
    
    const result = PTHFrecuenciaEdad.filter(item => {
        let rangeInit = parseInt(item.range.split('-')[0])
        let rangeEnd = parseInt(item.range.split('-')[1])
        
        return age == rangeInit || age == rangeEnd || (age + 1) == rangeInit || (age + 1) == rangeEnd;
    })

    if(result[0] == undefined){
        throw new ValidationErrorHomologate('El valor de la fecha de nacimiento no puede ser homologado',400)
    }
    
    return result[0]?.point;
}