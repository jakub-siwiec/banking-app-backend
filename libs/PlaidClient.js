const plaid = require('plaid')


const plaidClient = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_CLIENT_SECRET,
    env: plaid.environments.sandbox,
})


module.exports = plaidClient