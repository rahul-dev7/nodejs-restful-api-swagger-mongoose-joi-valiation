const express = require('express');
const router = express.Router();
const checkToken = require('../validation/validateToken') 

const todoController = require('../controllers/todoControllers.js');

router.get('/', checkToken.validateToken, todoController.getTodos );
router.post('/create-todo',  checkToken.validateToken, todoController.createTodo);
router.put('/:id',  checkToken.validateToken, todoController.getUpdate);
router.delete('/:id/delete',  checkToken.validateToken,  todoController.getDelete);

module.exports = router;