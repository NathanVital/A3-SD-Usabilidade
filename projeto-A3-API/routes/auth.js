const express       =   require('express')
const router        =   express.Router()

const AuthController    = require("../controllers/AuthController")
const Authentication    = require("../middleware/authenticate")


router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/refresh-token', AuthController.refreshToken)
router.delete('/delete',Authentication, AuthController.dell)
router.post('/list',Authentication, AuthController.list)
router.put('/update',Authentication, AuthController.update)

module.exports = router 