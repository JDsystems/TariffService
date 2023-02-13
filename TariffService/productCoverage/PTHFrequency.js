const resulPTHFrequencytAge = require('../conversions/convertPTHFrequencyAge')
const resultPTHFrequencyModel = require('../conversions/convertPTHFrequencyModel')
const resultPTHFrequencyCirculationCity = require('../conversions/convertPTHFrequencyCirculationCity')
module.exports = (city, birthDate, vehicleModel) => {
    let result;
    const baseValue = 0.000443642;
    const frequencyCirculationCityValue = resultPTHFrequencyCirculationCity(city);
    const frequencyAgeValue = resulPTHFrequencytAge(birthDate)
    const frequencyModelValue = resultPTHFrequencyModel(vehicleModel)
    result = baseValue * frequencyCirculationCityValue * frequencyAgeValue * frequencyModelValue;

    return result;
}