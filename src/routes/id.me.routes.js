const express = require('express');
const { apply, update, GetAll} = require('../controllers/id.me.controller');
const router = express.Router();

router.post('/application-IDme', apply)
router.put('/update-application-form/:id', update)
router.get('/GetAllApplication', GetAll)



module.exports = router;