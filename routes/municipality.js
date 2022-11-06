const { getMunicipality, addMunicipality, updateMunicipality } = require('../controller/municipality/municipality')
const router = require('express').Router()

router.route('/').get(getMunicipality).post(addMunicipality)
router.route('/:id').post(updateMunicipality)
module.exports = router