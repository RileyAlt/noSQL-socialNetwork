const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
       username: {
        type: String, 
        Unique: true,
        Required: true,
        Trim: true,
       },
       email: {
        type: String,
        Required: true,
        Unique: true,
        match: [/.+@.+\..+/, 'please provide an email!']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
       ],
       friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
       ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const user = model('user', userSchema);

module.exports = user;