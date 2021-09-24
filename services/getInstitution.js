const { getInstitutionById } = require('../subscribers/plaidEndpoints/institution')
const { getItem } = require('./getItem')

const logger = require('../libs/Logger')

const getInstitution = async (bearerToken) => {
    const item = await getItem(bearerToken)
    if (!item.item || !item.item.institution_id) {
        return null
    }
    const institution = await getInstitutionById(item.item.institution_id)
    return institution
}


module.exports = { getInstitution }