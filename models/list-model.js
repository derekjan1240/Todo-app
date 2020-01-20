const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const listSchema = new Schema({
    content: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
}, {
    timestamps: { createdAt: 'insert_date', updatedAt: 'update_date' },
});

const List = mongoose.model('list', listSchema);

module.exports = List;
