const User = require('../model/user');

exports.saveUser = (data) => {
    let newUser = new User(data);
    return newUser.save();
}