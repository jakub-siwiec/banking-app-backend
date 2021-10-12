const { getInstitutionById } = require('../subscribers/plaidEndpoints/institution')
const { getItem } = require('./getItem')


const getInstitution = async (accessToken) => {
    const item = await getItem(accessToken)
    if (!item.item || !item.item.institution_id) {
        return null
    }
    const institution = await getInstitutionById(item.item.institution_id)
    return institution
}


module.exports = { getInstitution }