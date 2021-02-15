const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    gender: String,
    status: String
});

const Userdb = mongoose.model('Userdb', schema);

module.exports = Userdb;