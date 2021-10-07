const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')

const { getAccountBalance } = require('../subscribers/plaidEndpoints/balance')


const getBalance = async (bearerToken, accountId) => {
    const accessToken = await bearerTokenExtractor(bearerToken)
    const auth = await getAccountBalance(accessToken, [accountId])
    return auth
}


module.exports = { getBalance }