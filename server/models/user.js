var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength : 1,
        trim: true
    }
});

var User = mongoose.model('User', userSchema);


module.exports = {User};