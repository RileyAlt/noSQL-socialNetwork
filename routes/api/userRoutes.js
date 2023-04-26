const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    createNewFriend,
    deleteFriend,
} = require('../../controllers/userController');

router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/").get(getUsers).post(createUser);

router.route("/:userId/friends/:friendId").post(createNewFriend).delete(deleteFriend);

module.exports = router;