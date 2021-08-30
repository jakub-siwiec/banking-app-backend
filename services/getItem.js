const { getAccessItem } = require('../subscribers/plaidEndpoints/item')
const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')


const getItem = async (bearerToken) => {
    const accessToken = await bearerTokenExtractor(bearerToken)
    const accounts = await getAccessItem(accessToken)
    return accounts
}


module.exports = { getItem }