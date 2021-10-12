const { getTransactions } = require('./getTransactions')


const getAccountTransactions = async (accessToken, startDate, endDate, accountId) => {
    const allTransactions = await getTransactions(accessToken, startDate, endDate)

    if (!allTransactions.transactions) {
        return allTransactions
    }

    const filteredTransactions = allTransactions.transactions.filter(item => item.account_id == accountId)

    return filteredTransactions
}


module.exports = { getAccountTransactions }