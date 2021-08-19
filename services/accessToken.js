const plaid = require('plaid')

const basicPino = require('pino')
const basicPinoLogger = basicPino({ prettyPrint: true })
const expressPino = require('express-pino-logger')({
  logger: basicPinoLogger
})

const logger = expressPino.logger


const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_CLIENT_SECRET,
    env: plaid.environments.sandbox,
  })

const getAccessToken = async (publicToken) => {
    try {
        logger.info("getAccessToken")
        logger.info(publicToken)
        const response = await client.exchangePublicToken(publicToken)
        logger.info(response)
        return response
    } catch (error) {
        console.err(error)
        return error
    }
}

module.exports = { getAccessToken }