const express = require('require');
const router = express.Router();

router.post('signIn', userCtrl.signIn);
router.post('login', userCtrl.login);

module.exports(router);