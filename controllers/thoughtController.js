const thought = require("../models/thought");

module.exports = {
  getThought(req, res) {
    thought
      .find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    thought
      .findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought with this ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  createThought(req, res) {
    thought
      .create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  updateThought(req, res) {
    thought
      .findOneAndUpdate({ _id: req.params.thoughtId }, req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  deleteThought(req, res) {
    thought
      .deleteOne({ _id: req.params.thoughtId })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  createThoughtReaction(req, res) {
    thought
      .findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } }
      )
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  deleteThoughtReaction(req, res) {
    thought
      .findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { thought: req.params.thoughtId } }
      )
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
};