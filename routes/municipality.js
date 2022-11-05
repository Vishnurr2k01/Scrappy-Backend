const {getMunicipality,addMunicipality} = require('../controller/municipality/municipality')
const router = require('express').Router()

router.route('/').get(getMunicipality).post(addMunicipality)
module.exports = router