const Common = require('../helpers/common');
const JwtToken = require('../helpers/jwtToken')

exports.validateToken = async(req, res, next) => {
    try {
        const resquestToken = req.headers["token"];
        if (!resquestToken) {
            return Common.sendErrorResponse(res, 400, "Token not present", '');
        }
    
        let result = await JwtToken.verifyToken(resquestToken);
        if(result.username) {
            next();
        }
    } catch(err) {
        return Common.sendErrorResponse(res, 500, "Internal Server Error" , err);
    }
    
}