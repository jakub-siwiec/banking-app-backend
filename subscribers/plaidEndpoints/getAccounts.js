const plaidClient = require('../../libs/PlaidClient')


const getAccounts = async (accessToken) => {
    access = accessToken.access_token
    const accounts = await plaidClient.getAccounts(access)
    return accounts
}


module.exports = { getAccounts }