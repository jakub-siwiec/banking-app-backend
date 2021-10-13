const getAccessItem = require('../subscribers/plaidEndpoints/item')


const getItem = async (accessToken) => {
    const accounts = await getAccessItem(accessToken)
    return accounts
}


module.exports = getItem