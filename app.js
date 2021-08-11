const express = require('express')

require('dotenv').config()

const plaidService = require('./services/plaidService')

const app = express()
const port = process.env.PORT

app.get('/', async (req, res) => {
  const plainLinkData =  await plaidService.createLinkToken()
  res.set({
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET"
  })
  res.send(plainLinkData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})