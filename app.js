const express = require('express')

require('dotenv').config()

const plaidService = require('./services/plaidService')

const app = express()
const port = process.env.PORT

app.get('/', async (req, res) => {
  const plainLinkData =  await plaidService.createLinkToken()
  res.send(plainLinkData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})