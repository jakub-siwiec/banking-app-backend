const { getItemAccounts } = require('../subscribers/plaidEndpoints/accounts')
const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')

const getAccounts = async (bearerToken) => {
    accessToken = bearerTokenExtractor(bearerToken)
    const accounts = await getItemAccounts(accessToken)
    return accounts
}


module.exports = { getAccounts }