const express = require('express')
const cors = require('cors')

require('dotenv').config()

const logger = require('./libs/Logger')

const { createLinkToken } = require('./subscribers/plaidAuth/linkToken')
const { getAccessToken } = require('./subscribers/plaidAuth/accessToken')
const { getAccounts } = require('./services/getAccounts')
const { getItem } = require('./services/getItem')
const { getInstitution } = require('./services/getInstitution')
const { getAuth } = require('./services/getAuth')
const { getIdentity } = require('./services/getIdentity')
const { getTransactions } = require('./services/getTransactions')
const { getAccountTransactions } = require('./services/getAccountTransactions')
const { getBalance } = require('./services/getBalance')


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

app.get('/accounts', async (req, res) => {
  try {
    const accounts = await getAccounts(req.headers.authorization)
    res.send(accounts)
  } catch (error) {
    res.send(error)
  }
})

app.get('/item', async (req, res) => {
  try {
    const item = await getItem(req.headers.authorization)
    res.send(item)
  } catch (error) {
    res.send(error)
  }
})

app.get('/institution', async (req, res) => {
  try {
    const institution = await getInstitution(req.headers.authorization)
    res.send(institution)
  } catch (error) {
    res.send(error)
  }
})

app.get('/auth', async (req, res) => {
  try {
    const auth = await getAuth(req.headers.authorization)
    res.send(auth)
  } catch (error) {
    res.send(error)
  }
})

app.get('/identity', async (req, res) => {
  try {
    const identity = await getIdentity(req.headers.authorization)
    res.send(identity)
  } catch (error) {
    res.send(error)
  }
})

app.get('/transactions', async (req, res) => {
  try {
    const transactions = await getTransactions(req.headers.authorization, '2018-11-09', '2021-09-07')
    res.send(transactions)
  } catch (error) {
    res.send(error)
  }
})

app.get('/transactions/:accountId', async (req, res) => {
  try {
    const accountTransactions = await getAccountTransactions(req.headers.authorization, '2018-11-09', '2021-09-07', req.params.accountId)
    res.send(accountTransactions)
  } catch (error) {
    res.send(error)
  }
})

app.get('/balance/:accountId', async (req, res) => {
  try {
    const accountTransactions = await getBalance(req.headers.authorization, req.params.accountId)
    res.send(accountTransactions)
  } catch (error) {
    res.send(error)
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})