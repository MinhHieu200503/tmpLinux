const AuthControllers = require('../../controllers/authControllers');
const router = require('express').Router();
// router.get('/', UserController.register);
router.post('/register', AuthControllers.register);
router.post('/login', AuthControllers.loginUser);
router.post('/refreshToken', AuthControllers.RequestRefreshToken);
router.post('/logout', AuthControllers.logOut);
module.exports = router;
