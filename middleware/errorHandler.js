const PlaidError = require('../libs/PlaidError')

const errorHandler = (err, req, res, next) => {
    try {
        if (err.name === 'PlaidError') {
            const plaidError = new PlaidError(err)
            res.status(plaidError.status)
            res.send(plaidError.response())
        } else {
            res.send(err.name)
        }    
    } catch (error) {
        res.status(500).send("Something went wrong")
    }
}   

module.exports = errorHandler