const moment = require('moment')

const getAccountTransactions = require('../subscribers/plaidEndpoints/transactions')

const OperationalCustomError = require('../libs/errors/OperationalCustomError')


const getTransactions = async (accessToken, dates, accountId) => {
    const { startDate, endDate } = dates

    if (!startDate || !endDate) {
        throw new OperationalCustomError(400, 'MissingFieldError', 'ERR_MISSING_ARGS', 'INVALID_REQUEST', 'No transactions start or end date passed')
    }

    const isStartDateFormat = moment(startDate, 'YYYY-MM-DD', true).isValid()
    const isEndDateFormat = moment(endDate, 'YYYY-MM-DD', true).isValid()

    if (isStartDateFormat !== true || isEndDateFormat !== true) {
        throw new OperationalCustomError(400, 'MissingFieldError', 'ERR_INVALID_ARG_VALUE', 'INVALID_REQUEST', 'Wrong date format passed')
    }

    const transactions = await getAccountTransactions(accessToken, startDate, endDate, accountId)

    return transactions
}


module.exports = getTransactions