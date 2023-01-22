const router = require('express').Router();
const homeRoutes = require('./homeRoute');
const loginRoutes = require('./loginRoute');
const postRoutes = require('./postRoute');
const registerRoutes = require('./registerRoute');
const dashboardRoutes = require('./dashboardRoute');
const apiRoutes = require('./api');

router.use('/', homeRoute);
router.use('/login', loginRoute);
router.use('/post', postRoute);
router.use('/register', registerRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoutes);

module.exports = router;