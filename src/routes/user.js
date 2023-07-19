const { Router } = require('express')

const {  getAllUsers,createUser } = require('../controller/user')

const router = Router()

router.get('/user', getAllUsers)
router.post('/user', createUser)

module.exports = router
