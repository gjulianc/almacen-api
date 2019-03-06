

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String,
    username: String
});

module.exports = mongoose.model('Usuarios', userSchema);