const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    thumbnail: {
        type: String,
        default: 'https://mpng.pngfly.com/20190404/vv/kisspng-rick-sanchez-morty-smith-pickle-rick-drawing-porta-svgs-for-geeks-5ca62da8ded916.3363312915543945369128.jpg',
    },
}, {
    timestamps: { createdAt: 'insert_date', updatedAt: 'update_date' },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
