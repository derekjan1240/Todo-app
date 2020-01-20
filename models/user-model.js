const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
}, {
    timestamps: { createdAt: 'insert_date', updatedAt: 'update_date' },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
