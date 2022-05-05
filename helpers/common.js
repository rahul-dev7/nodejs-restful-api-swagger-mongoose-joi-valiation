const { response } = require("express");

exports.sendSuccessResponse = (res, code, message, data) => {
    let response = {};
    
    response['message'] = message != '' ? message : "";
    response['data'] = data != '' ? data : "";
    let statusCode = code != '' ? code : 200;

    return res.status(statusCode).json(response);
}

exports.sendErrorResponse = (res, code, message, error) => {
    let response = {};

    let statusCode = code != '' ? code : 200;

    response['message'] = message != '' ? message : "";
    response['error'] = error != '' ? error : "";

    return res.status(statusCode).json(response);
}


exports.sendTokenResponse = (res, code, message, token, refreshToken) => {
    let response = {};
    
    response['message'] = message != '' ? message : "";
    response['token'] = token != '' ? token : "";
    response['refreshToken'] = refreshToken != '' ? refreshToken : "";
    let statusCode = code != '' ? code : 200;

    return res.status(statusCode).json(response);
}

