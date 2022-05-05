const User = require('../model/user');

exports.saveUser = (data) => {
    let newUser = new User(data);
    return newUser.save();
}

exports.getUserByEmail = (email) => {
    return User.findOne({email: email}).exec();
}


