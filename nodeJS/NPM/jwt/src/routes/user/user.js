const UserController = require('../../controllers/userController');
const {
    verifyToken,
    verifyIsAdminOrOwn,
} = require('../../middleware/verifycation');
const router = require('express').Router();

router.get('/allUsers', verifyToken, UserController.getAllUsers);
router.delete('/deleteUser', verifyIsAdminOrOwn, UserController.deleteByID);
module.exports = router;
