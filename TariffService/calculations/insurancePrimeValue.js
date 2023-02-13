const RCBFrequency = require('../productCoverage/RCBFrequency')
const RCBSeverity = require('../productCoverage/RCBSeverity')
const PTHFrequency = require('../productCoverage/PTHFrequency')
const PTHGmd = require('../productCoverage/PTHGmd')

module.exports = (data) => {

        const ValueRCBFrequency = RCBFrequency(data.circulationCity, data.cylinder);
        const ValueRCBSeverity = RCBSeverity(data.cylinder);
        const ValuePTHFrequency = PTHFrequency(data.circulationCity, data.birthDate, data.model);
        const ValuePTHGmd = PTHGmd(data.model);
    
        const primeValueAnnual  = ValueRCBFrequency * ValueRCBSeverity * ValuePTHFrequency * ValuePTHGmd;
        const primeValueMonthly  = primeValueAnnual / 12;
        
        return {
            valueAnnual: primeValueAnnual.toFixed(2),
            valueMonthly: primeValueMonthly.toFixed(2)
        }
        
}