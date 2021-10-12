const ProgrammingCustomError = require('../libs/ProgrammingCustomError')
const PlaidError = require('../libs/PlaidError')

const errorHandler = (err, req, res, next) => {
    try {
        if (err.name === 'PlaidError') {
            const plaidError = new PlaidError(err)
            plaidError.apiResponse(res)
        } else {
            const programmingCustomError = new ProgrammingCustomError(err)
            programmingCustomError.apiResponse(res)
        }    
    } catch (error) {
        const programmingCustomError = new ProgrammingCustomError(error)
        programmingCustomError.apiResponse(res)
    }
}   

module.exports = errorHandler