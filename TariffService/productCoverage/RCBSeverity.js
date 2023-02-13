let resultSeverityCylinder = require('../conversions/convertRCBSeverityCylinder')

module.exports = (cylinder) => {
    let result;
    const baseValue = 4597581;
    const severityCylinderValue = resultSeverityCylinder(cylinder);
    result = baseValue * severityCylinderValue;
    return result;
}