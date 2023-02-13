const validateReq = require('./validateRequest/validate');
const insurancePrimeValue = require('./calculations/insurancePrimeValue');

module.exports = async function (context, req) {
    const params = req.query;
    try {
        validateReq(params);

        const data = {
            cylinder: parseInt(params.cylinder),
            model: parseInt(params.model),
            birthDate : params.birthdate,
            circulationCity: params.circulationCity.toLowerCase()
        }
        
         //get coverages values
         const result = insurancePrimeValue(data);

     
         return {
             res: {
                 body: {
                     data: {
                        annualPrimeValue: result.valueAnnual,
                        monthlyPrimeValue: result.valueMonthly,
                     }
                 },
                 status: 200
             }
         };


    } catch (error) {
        return {
            res: {
                body: {
                    error:{
                        status: error.status,
                        name:  error.name,
                        message:  error.message,
                    }
                },
                status: error.status
            } 
        }
    } 
}