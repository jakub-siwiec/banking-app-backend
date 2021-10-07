const plaidClient = require('../../libs/PlaidClient')


const getAccessItem = async (accessToken) => {
    const item = await plaidClient.getItem(accessToken)
    return item
}


module.exports = { getAccessItem }