var mongoose = require('mongoose');

var {uname, pwd, database} = require('./../config/config.json');

mongoose.Promise = global.Promise;
if(uname === '' && pwd === ''){
    mongoose.connect(process.env.MONGODB_URI);
}else{
    mongoose.connect(`mongodb://${uname}:${pwd}@ds157089.mlab.com:57089/${database}`)
}


module.exports = {mongoose};