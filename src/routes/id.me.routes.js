const express = require('express');
const { signup,login, update,ForgetPassword, GetAll} = require('../controllers/id.me.controller');
const router = express.Router();

router.post('/application-IDme', signup)
router.post('/login', login)
router.put('/update-application-form/:id', update)
router.put('/forget-password', ForgetPassword)
router.get('/GetAllApplication', GetAll)



module.exports = router;