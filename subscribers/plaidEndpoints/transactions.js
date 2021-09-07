const plaidClient = require('../../libs/PlaidClient')


const getAccountTransactions = async (accessToken, startDate, endDate) => {
    const transactions = await plaidClient.getTransactions(accessToken, startDate, endDate, {})
    return transactions
}


module.exports = { getAccountTransactions }