const { getAccountTransactions } = require('../subscribers/plaidEndpoints/transactions')
const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')


const getTransactions = async (bearerToken) => {
    const accessToken = await bearerTokenExtractor(bearerToken)
    const transactions = await getAccountTransactions(accessToken, 'ahdds', 'dshfdh')
    return transactions
}


module.exports = { getTransactions }