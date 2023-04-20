const user = require('../models/user');

module.exports = {
    getUsers(req, res) {
        user.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req,res) {
        user.findOne({ _id: req.params.userId })
            .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user with this ID'})
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    createUser(req, res){
        user.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
};