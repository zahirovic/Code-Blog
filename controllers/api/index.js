const router = require("express").Router();
const logoutRoute = require('./logoutRoute');

router.use('/logout', logoutRoute);

module.exports = router;