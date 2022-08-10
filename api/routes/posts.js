const router = require('express').Router()
const postsController = require('../controllers/posts')


router.get('/', postsController.showAll)
router.post('/', postsController.create)

module.exports = router;
