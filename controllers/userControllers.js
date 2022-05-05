const bcrypt = require('bcrypt');
const Common = require('../helpers/common');
const userService = require('../services/userService');
const jwtToken = require('../helpers/jwtToken');
let refreshTokensList = [];
exports.register = async(req, res, next) => {
    try {
        let user = await userService.getUserByEmail(req.body.email);
        if(user) {
            return Common.sendErrorResponse(res, 200, "user is already exist", '');
        }
        let password = bcrypt.hashSync(req.body.password, 10);
        req.body.password = password;
        let result = await userService.saveUser(req.body);
        return Common.sendErrorResponse(res, 201, "user is register successfully", ''); 
    }
    catch(err) {
        return Common.sendErrorResponse(res, 500, "user is not register successfully", err);  
    }
}


exports.login = async(req, res, next) => {
    try {
        const email = req.body.email;
        let user = await userService.getUserByEmail(req.body.email);
        if(!user) {
            return Common.sendErrorResponse(res, 404, "user is not found", '');  
        }
        
        if(await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = await jwtToken.generateAccessToken({username: req.body.email});
            const refreshToken = accessToken;
            refreshTokensList.push(refreshToken);
            return Common.sendTokenResponse(res, 200, 'success', accessToken, refreshToken);
        }
        else {
            return Common.sendErrorResponse(res, 401, 'Email and Password is incorrect1', '');
        }
    } catch(err) {
        return Common.sendErrorResponse(res, 500, "Internal Server Error", err);  
    }
}

exports.refreshToken = async(req, res, next) => {
    try {
        if(!refreshTokensList.includes(req.body.token)) {
            return Common.sendErrorResponse(res, 400, 'Refresh Token Invalid', '');
        }
    
        refreshTokensList = refreshTokensList.filter( (c) => c != req.body.token)
        const accessToken = await jwtToken.generateRefreshToken({username: req.body.email});
        const refreshToken = accessToken;
        refreshTokensList.push(refreshToken);
        return Common.sendTokenResponse(res, 200, 'success', accessToken, refreshToken);
    }
    catch(error) {
        return Common.sendErrorResponse(res, 500, "Internal Server Error", error);
    }
    
}

exports.logout = async(req, res, next) => {
    try {
        if(!refreshTokensList.includes(req.body.token)) {
            return Common.sendErrorResponse(res, 400, 'Refresh Token Invalid', '');
        }
        
        refreshTokensList = refreshTokensList.filter( (c) => c != req.body.token);
        return Common.sendSuccessResponse(res, 200, 'success', '');
    }
    catch(err) {
        return Common.sendErrorResponse(res, 500, "Internal Server Error", error);
    }
}

