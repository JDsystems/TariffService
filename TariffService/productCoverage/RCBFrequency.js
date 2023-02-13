
const resultRCBCirculationCity = require('../conversions/convertRCBFrequencyCirculationCity')
const resultRCBFrequencyCylinder = require('../conversions/convertRCBFrequencyCylinder')

module.exports = (city, cylinder) => {
    let result;
    const baseValue = 0.0009;
    const circulationCityValue = resultRCBCirculationCity(city);
    const frequencyCylinderValue = resultRCBFrequencyCylinder(cylinder);
    result = baseValue * circulationCityValue * frequencyCylinderValue;
    return result;
}