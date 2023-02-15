const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
        }
        res.render('register')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newEmail = await User.findOne({ where: {email: req.body.email }});

        if (newEmail) {
            res.status(400).json({ message: 'E-mail already registered' });
            return;
        }

        const newUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = newUserData.id;
            req.session.logged_in = true;
            res.status(200).json(newUserData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;