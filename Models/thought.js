const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            Required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            Required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleDateString() 
           },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

const thoughtSchema = new Schema(
    {
       thoughtText: {
        type: String, 
        Required: true,
        minlength: 1,
        maxlength: 280,
       },
       createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toLocaleDateString() 
       },
       username: {
        type: String,
        Required: true,
       },
       reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const thought = model('thought', thoughtSchema);

module.exports = thought;