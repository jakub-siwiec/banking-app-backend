const { getItemBankData } = require('../subscribers/plaidEndpoints/auth')
const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')

const getAuth = async (bearerToken) => {
    const accessToken = await bearerTokenExtractor(bearerToken)
    const auth = await getItemBankData(accessToken)
    return auth
}


module.exports = { getAuth }