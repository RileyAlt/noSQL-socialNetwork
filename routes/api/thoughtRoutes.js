const router = require("express").Router();

const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createThoughtReaction,
} = require("../../controllers/thoughtController");

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/").get(getThought).post(createThought);

router.route("/:thoughtId/reactions").post(createThoughtReaction);

module.exports = router;
