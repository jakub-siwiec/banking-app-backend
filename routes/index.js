const express = require('express')
const router = express.Router()

const bearerTokenHandler = require('../middleware/bearerTokenHandler')

const { createLinkToken } = require('../subscribers/plaidAuth/linkToken')
const { getAccessToken } = require('../subscribers/plaidAuth/accessToken')
const { deleteAccessToken } = require('../services/deleteAccessToken')
const { getAccounts } = require('../services/getAccounts')
const { getInstitution } = require('../services/getInstitution')
const { getAuth } = require('../services/getAuth')
const { getAccountTransactions } = require('../services/getAccountTransactions')
const { getBalance } = require('../services/getBalance')


router.get('/', 
    async (req, res) => {
        try {
            const plainLinkData =  await createLinkToken()
            res.send(plainLinkData)
        } catch (error) {
            console.log(error.code)
            res.status(500).send(error.statusCode)
        }
    }
)

router.post('/access-token', 
    async (req, res, next) => {
        try {
            const accessToken = await getAccessToken(req.body.publicToken)
            res.send(accessToken)
        } catch (error) {
            next(error)
        }
    }
)

router.delete('/access-token', 
    bearerTokenHandler,
    async (req, res) => {
        try {
            const response = await deleteAccessToken(res.locals.accessToken)
            res.send(response)
        } catch (error) {
            res.send(error)
        }
    }
)

router.get('/auth', 
    bearerTokenHandler, 
    async (req, res) => {
        try {
            const auth = await getAuth(res.locals.accessToken)
            res.send(auth)
        } catch (error) {
            res.send(error)
        }
    }
)

router.get('/accounts', 
    bearerTokenHandler,
    async (req, res) => {
        try {
            const accounts = await getAccounts(res.locals.accessToken)
            res.send(accounts)
        } catch (error) {
            res.send(error)
        }
    }
)

router.get('/institution', 
    bearerTokenHandler,
    async (req, res) => {
        try {
            const institution = await getInstitution(res.locals.accessToken)
            res.send(institution)
        } catch (error) {
            res.send(error)
        }
    }
)

router.get('/balance/:accountId', 
    bearerTokenHandler,
    async (req, res) => {
        try {
            const accountTransactions = await getBalance(res.locals.accessToken, req.params.accountId)
            res.send(accountTransactions)
        } catch (error) {
            res.send(error)
        }
    }
)

router.get('/transactions/:accountId', 
    bearerTokenHandler,
    async (req, res) => {
        try {
            const accountTransactions = await getAccountTransactions(res.locals.accessToken, '2018-11-09', '2021-09-07', req.params.accountId)
            res.send(accountTransactions)
        } catch (error) {
            res.send(error)
        }
    }
)
  

module.exports = router