const { getTransactions } = require('./getTransactions')

const logger = require('../libs/Logger')

const getAccountTransactions = async (bearerToken, startDate, endDate, accountId) => {

    const allTransactions = await getTransactions(bearerToken, startDate, endDate)

    if (!allTransactions.transactions) {
        return allTransactions
    }

    const filteredTransactions = allTransactions.transactions.filter(item => item.account_id == accountId)


    return filteredTransactions

}

module.exports = { getAccountTransactions }