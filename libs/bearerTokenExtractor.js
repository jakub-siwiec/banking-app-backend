const bearerTokenExtractor = (fullAuthorizationHeader) => {
    return fullAuthorizationHeader.split("Bearer ")[1]
}


module.exports = { bearerTokenExtractor }