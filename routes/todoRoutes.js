const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoControllers.js');
router.get('/', todoController.getTodos );
router.post('/create-todo', todoController.createTodo);
router.put('/:id', todoController.getUpdate);
router.delete('/:id/delete', todoController.getDelete);
// router.post('/create-todo', (req, res, next) => {
//     console.log('hello');
// } );

// router.put('/:id', (req, res, next) => {
//     console.log('id');
// });
module.exports = router;