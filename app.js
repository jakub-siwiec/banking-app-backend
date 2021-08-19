const express = require('express')
const cors = require('cors')

const basicPino = require('pino')
const basicPinoLogger = basicPino({ prettyPrint: true })
const expressPino = require('express-pino-logger')({
  logger: basicPinoLogger
})

const logger = expressPino.logger

require('dotenv').config()

const { createLinkToken } = require('./services/linkToken')
const { getAccessToken } = require('./services/accessToken')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  const plainLinkData =  await createLinkToken()
  logger.info(plainLinkData)
  res.send(plainLinkData)
})

app.post('/access-token', async (req, res) => {
  try {
    const publicToken = req.body.publicToken
    logger.info(publicToken)
    const accessToken = await getAccessToken(publicToken)
    res.send(accessToken)
  } catch (error) {
    res.send(error)
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})