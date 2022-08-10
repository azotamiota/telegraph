const Post = require('../models/Post')

async function showAll (req, res) {
    try {
        const books = await Post.all;
        res.status(200).json(books)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function create (req, res) {
    try {
        await Post.create(req.body.title, req.body.name, req.body.story);
        res.status(200).json({success: "new post created"})
    } catch (err) {
        res.status(422).json({err})
    }
}


module.exports = {
    showAll,
    create
}
