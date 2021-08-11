const plaid = require('plaid')

const plaidClient = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_CLIENT_SECRET,
  env: plaid.environments.sandbox,
})

const createLinkToken = async () => {
    try {
        const tokenResponse = await plaidClient.createLinkToken({
            user: {
                client_user_id: "1",
            },
            client_name: 'Plaid Test App',
            products: ["auth"],
            country_codes: ['US'],
            language: 'en',
            webhook: 'https://webhook.sample.com',
        })
        return tokenResponse

    } catch (err) {
        return { error: err.message }
    }
}

module.exports = { createLinkToken }