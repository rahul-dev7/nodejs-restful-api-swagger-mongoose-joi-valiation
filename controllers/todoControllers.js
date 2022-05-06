const todoService = require('../services/todoService');
const Common = require('../helpers/common');
exports.createTodo = async (req, res,next) => {
    try {
        let result = await todoService.saveTodo(req.body);
        return Common.sendSuccessResponse(res, 200, "successfully", '');
    }
    catch(err) {
        return Common.sendErrorResponse(res, 500, "Failed", err);
    }   
}

exports.getTodos = async(req, res,next) => {
    try {
        let todos = await todoService.getTodos();
        return Common.sendSuccessResponse(res, 200, "Success", todos);
    }
    catch(err) {
        return Common.sendErrorResponse(res, 500, "Failed", err);
    }  
}


exports.getUpdate = async(req, res,next) => {
   
    try {
        let updateDataObj = {};
        let fieldArray = ['title', 'description', 'user'];
        let id = Number(req.params.id);
        let data = req.body;

        let todo = await todoService.getTodoById(id);
        
        if(!todo) {
            return Common.sendErrorResponse(res, 404, "todo is not found", '');   
        }

        fieldArray.forEach(field => {
            updateDataObj[field] = data[field];
        });

        const updateTodo = await todoService.updateTodo(updateDataObj, todo._id)
        return Common.sendSuccessResponse(res, 200, "todo is updated successfully", updateTodo);
    }
    catch(err) {
        return Common.sendErrorResponse(res, 500, "todo is not updated successfully", err);   
    }  
}


exports.getDelete = async(req, res,next) => {
   
    try {
        let id = Number(req.params.id);


        let todo = await todoService.getTodoById(id);
        
        if(!todo) {
            return Common.sendErrorResponse(res, 404, "todo is not found", '');   
        }
        
        const deleteTodo = await todoService.deleteTodo(todo._id);
        if(deleteTodo['deletedCount'] > 0) {
            return Common.sendSuccessResponse(res, 200, "todo is delete successfully", '');
        }
        else {
            return Common.sendErrorResponse(res, 500, "todo is not delete successfully", '');   
        }
        
    }
    catch(err) {
        return Common.sendErrorResponse(res, 500, "todo is not delete successfully", '');   
    }  
}



