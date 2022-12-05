const router = require('express').Router();
const { tambahProfile, getAllProfile, getProfileById } = require('./../controllers/profilecontroller');
router.post('/', tambahProfile);
router.get('/', getAllProfile);
router.get('/:id', getProfileById);
module.exports = router;
