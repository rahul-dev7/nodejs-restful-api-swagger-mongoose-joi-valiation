const express = require('express');
const router = express.Router();
const checkToken = require('../validation/validateToken');
const validate = require('../validation/Inputvalidator')
const validatorSchema = require('../validation/validatorSchema');
const todoController = require('../controllers/todoControllers.js');

router.get(
    '/', 
    checkToken.validateToken, 
    todoController.getTodos 
);
router.post(
    '/create-todo', 
    [ 
      checkToken.validateToken, 
      validate.validate(validatorSchema.todoValidation)
    ], 
    todoController.createTodo
);

router.put(
    '/:id',  
    checkToken.validateToken, 
    todoController.getUpdate
);
router.delete(
    '/:id/delete',  
    checkToken.validateToken, 
    todoController.getDelete
);

module.exports = router;