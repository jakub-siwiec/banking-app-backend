const plaidClient = require('../../libs/PlaidClient')


const getUserIdentity = async (accessToken) => {
    const identity = await plaidClient.getIdentity(accessToken)
    return identity
}

module.exports = { getUserIdentity }