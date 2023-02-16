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


router.route("/").get(fetchUsers).post(userCreation);


router
  .route("/:userId")
  .get(fetchOneUser)
  .delete(removeUser)
  .put(updateUserDetails);


router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
