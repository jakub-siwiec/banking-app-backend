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

const getAccounts = async (accessToken) => {
    access = accessToken.access_token
    logger.info(access)
    const accounts = await client.getAccounts(access)
    logger.info(accounts)
    return accounts
}

module.exports = { getAccounts }