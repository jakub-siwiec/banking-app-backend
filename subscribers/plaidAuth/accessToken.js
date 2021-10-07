const plaidClient = require('../../libs/PlaidClient')


const getAccessToken = async (publicToken) => {
    try {
        const response = await plaidClient.exchangePublicToken(publicToken)
        return response
    } catch (error) {
        return error
    }
}

const deleteCurrentAccessToken = async (accessToken) => {
    try {
        const response = await plaidClient.invalidateAccessToken(accessToken)
        return response
    } catch (error) {
        return error
    }
}


module.exports = { getAccessToken, deleteCurrentAccessToken }