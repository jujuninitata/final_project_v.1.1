const router = require('express').Router();
const { register, login, getuser } = require('./../controllers/authenticationController');

router.post('/register', register);
router.post('/login', login);
router.get('/', getuser);
// router.post("/tambahprofile", tambahprofile)

module.exports = router;
