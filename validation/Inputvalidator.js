const Common = require('../helpers/common');

exports.validate = (Schema) => {
    return (req, res, next) => { 
        
        const { error } = Schema.validate(req.body);
        if(error) {
          return Common.sendErrorResponse(res, 406, 'Invalid Input', error);  
        }
        next();    
    }
}



