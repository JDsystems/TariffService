const resultVehicleModel = require('../calculations/vehicleModel')
module.exports = (vehicleModel) => {
    const copay = 0.850;
    const valorMotorcicle = 5000000;
    const frequencyModelValue = resultVehicleModel(vehicleModel)

    let value = (1 * valorMotorcicle * Math.pow((1 - 0.3),frequencyModelValue));

    return value < 0 ? (1  * copay) : (value * copay);
}