const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    createNewFriend,
} = require('../../controllers/userController');

router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/").get(getUsers).post(createUser);

router.route("/:userId/friends/:friendId").post(createNewFriend);

module.exports = router;