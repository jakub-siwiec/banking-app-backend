const plaidClient = require('../../libs/PlaidClient')

const logger = require('../../libs/Logger')


const getAccountTransactions = async (accessToken, startDate, endDate) => {
    const transactions = await plaidClient.getTransactions(accessToken, '2018-01-01', '2020-02-01', {})
    return transactions
}


module.exports = { getAccountTransactions }