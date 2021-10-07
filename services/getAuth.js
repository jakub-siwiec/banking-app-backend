const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')

const { getItemBankData } = require('../subscribers/plaidEndpoints/auth')


const getAuth = async (bearerToken) => {
    const accessToken = await bearerTokenExtractor(bearerToken)
    const auth = await getItemBankData(accessToken)
    const auth_response = {
        status_code: auth.status_code,
        request_id: auth.request_id,
        description: "Authorized"
    }
    return auth_response
}


module.exports = { getAuth }