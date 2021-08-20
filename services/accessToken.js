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
        const response = await client.exchangePublicToken(publicToken)
        return response
    } catch (error) {
        return error
    }
}

module.exports = { getAccessToken }