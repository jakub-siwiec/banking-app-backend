const moment = require('moment')

const { getAccountTransactions } = require('../subscribers/plaidEndpoints/transactions')
const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')


const getTransactions = async (bearerToken, startDate, endDate) => {
    const isStartDateFormat = moment(startDate, 'YYYY-MM-DD', true).isValid()
    const isEndDateFormat = moment(endDate, 'YYYY-MM-DD', true).isValid()

    if (isStartDateFormat !== true || isEndDateFormat !== true) {
        throw new Error('Wrong date format')
    }

    const accessToken = await bearerTokenExtractor(bearerToken)
    const transactions = await getAccountTransactions(accessToken, startDate, endDate)
    return transactions
}


module.exports = { getTransactions }