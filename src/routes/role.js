const { Router } = require('express')

const { getAllRoles, createRole, deleteRole} = require('../controller/role')

const router = Router()

router.delete('/role/:id', deleteRole)
router.post('/role', createRole)
router.get('/role', getAllRoles)

module.exports = router
