const { getUserIdentity } = require('../subscribers/plaidEndpoints/identity')
const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')


const getIdentity = async (bearerToken) => {
    const accessToken = await bearerTokenExtractor(bearerToken)
    const identity = await getUserIdentity(accessToken)
    return identity
}


module.exports = { getIdentity }