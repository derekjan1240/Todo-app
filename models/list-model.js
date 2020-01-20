const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    content: String,
    finished: {
        type: Boolean,
        default: false,
    },
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
