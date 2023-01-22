const router = require("express").Router();
const logoutRoutes = require('./logoutRoute');

router.use('/logout', logoutRoute);

module.exports = router;