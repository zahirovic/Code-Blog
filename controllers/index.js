const router = require('express').Router();
const homeRoute = require('./homeRoute');
const loginRoute = require('./loginRoute');
const postRoute = require('./postRoute');
const registerRoute = require('./registerRoute');
const dashboardRoute = require('./dashboardRoute');
const apiRoute = require('./api');

router.use('/', homeRoute);
router.use('/login', loginRoute);
router.use('/post', postRoute);
router.use('/register', registerRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoute);

module.exports = router;