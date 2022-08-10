const router = require('express').Router()
const postsController = require('../controllers/posts')

router.get('/:title', postsController.show)
router.post('/', postsController.create) // 

module.exports = router;
