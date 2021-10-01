const { deleteCurrentAccessToken } = require('../subscribers/plaidAuth/accessToken')
const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')

const deleteAccessToken = async (bearerToken) => {
    const accessToken = bearerTokenExtractor(bearerToken)
    const newAccessToken = await deleteCurrentAccessToken(accessToken)
    const { new_access_token, ...response } = newAccessToken 
    return response
}


module.exports = { deleteAccessToken }