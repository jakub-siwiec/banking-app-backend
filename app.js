const express = require('express')
const cors = require('cors')

require('dotenv').config()

const { createLinkToken } = require('./subscribers/plaidAuth/linkToken')
const { getAccessToken } = require('./subscribers/plaidAuth/accessToken')
const { getAccounts } = require('./subscribers/plaidEndpoints/getAccounts')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  try {
    const plainLinkData =  await createLinkToken()
    res.send(plainLinkData)
  } catch (error) {
    res.send(error)
  }
})

app.post('/access-token', async (req, res) => {
  try {
    const accessToken = await getAccessToken(req.body.publicToken)
    res.send(accessToken)
  } catch (error) {
    res.send(error)
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})