const express = require('express');
const router = express.Router();
const validate = require('../validation/Inputvalidator')
const validatorSchema = require('../validation/validatorSchema');

const userControllers = require('../controllers/userControllers');

router.post(
    '/register', 
    [validate.validate(validatorSchema.registerValidation)], 
    userControllers.register
);
router.post(
    '/login', 
    [validate.validate(validatorSchema.loginValidation)],
    userControllers.login
);
router.post(
    '/refreshToken', 
    userControllers.refreshToken
);
router.delete(
    '/logout', 
    userControllers.logout
);
module.exports = router;