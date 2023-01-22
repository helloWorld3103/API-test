const { Router } = require('express')

const { getAllRoles, createRole } = require('../controller/role')

const router = Router()

router.post('/role', createRole)
router.get('/role', getAllRoles)

module.exports = router
