const express = require('express')
const cors = require('cors')

require('dotenv').config()

const logger = require('./libs/Logger')

const { createLinkToken } = require('./subscribers/plaidAuth/linkToken')
const { getAccessToken } = require('./subscribers/plaidAuth/accessToken')
const { deleteAccessToken } = require('./services/deleteAccessToken')
const { getAccounts } = require('./services/getAccounts')
const { getInstitution } = require('./services/getInstitution')
const { getAuth } = require('./services/getAuth')
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

app.delete('/access-token', async (req, res) => {
  try {
    const response = await deleteAccessToken(req.headers.authorization)
    res.send(response)
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

app.get('/accounts', async (req, res) => {
  try {
    const accounts = await getAccounts(req.headers.authorization)
    res.send(accounts)
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

app.get('/balance/:accountId', async (req, res) => {
  try {
    const accountTransactions = await getBalance(req.headers.authorization, req.params.accountId)
    res.send(accountTransactions)
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})