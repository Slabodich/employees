const express = require('express');
const { login, register, current } = require('../controller/UsersController');
const router = express.Router();

/* GET users listing. */
router.post('/login', login);

router.post('/register', register);

router.get('/current', current);

module.exports = router;