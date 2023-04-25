const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThought);
router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

module.exports = router;