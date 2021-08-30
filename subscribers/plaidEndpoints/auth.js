const plaidClient = require('../../libs/PlaidClient')


const getItemBankData = async (accessToken) => {
    const auth = await plaidClient.getAuth(accessToken)
    return auth
}

module.exports = { getItemBankData }