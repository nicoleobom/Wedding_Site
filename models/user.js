const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema ({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    attending: { type: Boolean, required: true },
    associated: { type: Array }
})

const User = mongoose.model('User', userSchema);

module.exports = User;