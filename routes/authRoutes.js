const express = require('express');
const router = express.Router();


const userControllers = require('../controllers/userControllers');

router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
router.post('/refreshToken', userControllers.refreshToken);
router.delete('/logout', userControllers.logout);
module.exports = router;