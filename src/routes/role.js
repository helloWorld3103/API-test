const { Router } = require('express')

const { getAllRoles, createRole, deleteRole, updateRole } = require('../controller/role')

const router = Router()

router.delete('/role/:id', deleteRole)
router.put('/role/:id', updateRole)
router.post('/role', createRole)
router.get('/role', getAllRoles)

module.exports = router
