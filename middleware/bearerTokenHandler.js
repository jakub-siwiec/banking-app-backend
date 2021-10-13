const { bearerTokenExtractor } = require('../libs/bearerTokenExtractor')

const TokenError = require('../libs/errors/TokenError')


const bearerTokenHandler = (req, res, next) => {
    if (req.headers.authorization) {
        res.locals.accessToken = bearerTokenExtractor(req.headers.authorization)
        next()
    } else {
        const tokenError = new TokenError()
        tokenError.apiRequest(res)
    }
}


module.exports = bearerTokenHandler