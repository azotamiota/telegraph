const Post = require('../models/Post')

async function show (req, res) {
    try {
        const post = await Post.show(req.params.title);
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function create (req, res) {
    try {
        // console.log('req things here: ', req.body);
        await Post.create(req.body.title, req.body.name, req.body.story);
        res.status(200).json({success: "new post created"})
    } catch (err) {
        res.status(422).json({err})
    }
}


module.exports = {
    show,
    create
}
