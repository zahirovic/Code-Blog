const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err)
    }
});


router.post('/', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ 
                message: 'Incorrect email or password, please try again' 
            });
            return;
        }
        
        const validPassword = userData.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({ 
                message: 'Incorrect email or password, please try again' 
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({ message: 'You have been loggeed in' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
