const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { validationGetUser, validationUpdateUser } = require('../middlewares/validations');

router.get('/users/me', validationGetUser, getUser);
router.patch('/users/me', validationUpdateUser, updateUser);

module.exports = router;
