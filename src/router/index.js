const Router = require('@koa/router');
const AuthController = require('../controller/AuthController');
const UserController = require('../controller/UserController');

const router = new Router();

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

router.get('/user/all', UserController.getAllUser);
router.get('/user/id/:id', UserController.getUserById);
router.post('/user/add', UserController.add);
router.post('/user/update', UserController.update);
router.post('/user/delete', UserController.delete);

module.exports = router;