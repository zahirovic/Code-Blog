const router = require('express').Router();
const withAuth = require('../mw/auth');
const { User, Post, Comment } = require('../models');

router.get('/', withAuth, async (req, res) => {
    res.render('new-post')
});

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'body', 'date_created'],
                    include: [
                        {
                            model: User,
                            attributes: ['username'],
                        },
                    ],
                },
            ],
        });
        const post = postData.get({ plain: true });

        if (post.user.id == req.session.user_id) {
            console.log(`This post belongs to the registered user`)

            const belongsToUser = true;
            res.render('post', {post, belongsToUser});
            return;
        } else {
            res.render('post', {post});
            return;
        };
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            body: req.body.body,
            user_id: req.session.user_id,
            post_id: Number(req.params.id),
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const userPost = await Post.findByPk(req.params.id);
        console.log(userPost);
        userPost.update({
            title: req.body.title,
            description: req.body.description,
        });
        res.status(200).json(userPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(204).json(deletePost);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;