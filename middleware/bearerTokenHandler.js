const { bearerTokenExtractor }= require('../libs/bearerTokenExtractor')


const bearerTokenHandler = (req, res, next) => {
    res.locals.accessToken = bearerTokenExtractor(req.headers.authorization)
    next()
}


module.exports = bearerTokenHandler