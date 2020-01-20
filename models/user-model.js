const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    thumbnail: String,
}, {
    timestamps: { createdAt: 'insert_date', updatedAt: 'update_date' },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
