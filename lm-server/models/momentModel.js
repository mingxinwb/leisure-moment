const mongoose = require('mongoose');
const MomentSchema = mongoose.Schema({
    id: Number,
    title: String,
    nickname: String,
    content: String,
    likes: Number,
    comments: Number
});
const MomentModel = mongoose.model('MomentModel', MomentSchema);

module.exports = MomentModel;