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

// /api/thoughts
router.route("/").get(fetchAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(fetchOneThought)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:userId/friends/:friendId
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
