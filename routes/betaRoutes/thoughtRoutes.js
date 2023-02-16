const router = require("express").Router();
const {
  fetchAllThoughts,
  fetchOneThought,
  createThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");


router.route("/").get(fetchAllThoughts).post(createThought);


router
  .route("/:thoughtId")
  .get(fetchOneThought)
  .put(updateThought)
  .delete(removeThought);


router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
