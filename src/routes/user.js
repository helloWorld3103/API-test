const { Router } = require('express')

const {  getAllUsers,createUser,loginUser } = require('../controller/user')

const router = Router()

router.get('/user', getAllUsers)
router.post('/user', createUser)
router.post('/user/login', loginUser)

module.exports = router
