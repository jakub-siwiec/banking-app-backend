const plaidClient = require('../../libs/PlaidClient')


const getInstitutionById = async (institutionId) => {
    const institution = await plaidClient.getInstitutionById(institutionId, ['US', 'GB', 'ES', 'NL', 'FR', 'IE', 'CA'])
    return institution
}

module.exports = { getInstitutionById }