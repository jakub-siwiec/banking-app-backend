const plaidClient = require('../../libs/PlaidClient')
const logger = require('../../libs/Logger')

const createLinkToken = async () => {
    // try {
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
        // const tokenResponse = await plaidClient.createLinkToken()

        return tokenResponse
    // } catch (err) {
        // return { error: err.message }
        // return err
    // }
}


module.exports = { createLinkToken }