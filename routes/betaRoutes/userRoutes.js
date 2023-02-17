const router = require("express").Router();
const {
  fetchUsers,
  fetchOneUser,
  userCreation,
  removeUser,
  updateUserDetails,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(fetchUsers).post(userCreation);

// /api/users/:userId
router
  .route("/:userId")
  .get(fetchOneUser)
  .delete(removeUser)
  .put(updateUserDetails);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
