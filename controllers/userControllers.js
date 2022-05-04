const bcrypt = require('bcrypt');
const Common = require('../helpers/common');
const userService = require('../services/userService');

exports.register = async(req, res, next) => {
    try {
        req.body.password = await bcrypt(req.body.password , 10);
        console.log( req.body.password);
        userService.saveUser(req.body);
    }
    catch(err) {
        return Common.sendErrorResponse(res, 500, "user is not register successfully", '');  
    }
}