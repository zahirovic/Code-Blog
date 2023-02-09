
const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    const userPosts = await Post.findAll({
        where: {
            user_id: req.session.user_id
        },
    });

    if(!userPosts) {
        res.render('home');
        return;
    }

    const posts = userPosts.map((posts) => posts.get({ plain: true }));
    posts.reverse();
    res.render('home', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;