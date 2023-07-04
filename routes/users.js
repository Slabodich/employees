const express = require('express');
const { login, register, current } = require('../controller/UsersController');
const router = express.Router();
const { auth } = require('../middleware/auth');

/* GET users listing. */
router.post('/login', login);

router.post('/register', register);

router.get('/current', auth, current);

module.exports = router;
