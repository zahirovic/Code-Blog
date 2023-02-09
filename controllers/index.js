const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const registerRoutes = require('./registerRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/register', registerRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;