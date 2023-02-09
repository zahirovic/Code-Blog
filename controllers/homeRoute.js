const router = require('express').Router();
const { User, Post } = require('../models');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
        const posts = postData.map((posts) => posts.get({ plain: true }));
        posts.reverse();
        res.render('home', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;