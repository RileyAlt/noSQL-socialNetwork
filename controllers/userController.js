const user = require("../models/user");

module.exports = {
  getUsers(req, res) {
    user
      .find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    user
      .findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    user
      .create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    user
      .findOneAndUpdate({ _id: req.params.userId }, req.body)
      .then((userFromDB) =>
        !userFromDB
          ? res.status(404).json({ message: "No User with this ID" })
          : res.json(userFromDB)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    user
      .findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  createNewFriend(req, res) {
    user
      .findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } }
      )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    user
      .findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } }
      )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
};
