const express = require('express')
const router = express.Router()
const {
    getAllLGA,
    createLGA,
    getLGA,
    updateLGA,
    deleteLGA,
} = require('../controllers/tasks')

router.route('/').get(getAllLGA).post(createLGA)
router.route('/:id').get(getLGA).patch(updateLGA).delete(deleteLGA)
 
module.exports = router