const { compareSync } = require('bcrypt');
const Todo = require('../model/todo');
const user = require('../model/user');

getTodos = () => {
    return  Todo.find({}).populate('user').exec();
}

saveTodo = (data) => {
   let newTodo = new Todo(data);
   newTodo.save((err, res) => {
       if(err) {
           return err;
       }
       return "Todo inserted successfully";
   })
}

getTodoById = (id) => {
    return Todo.findOne({ id: id});
}

updateTodo = (data, id) => {
    console.log(id.toString());
   let newTodo = new Todo(data);

    return Todo.findByIdAndUpdate(id.toString(),
        { $set: data },
        {new:true}); 
}


deleteTodo = (id) => {
    return Todo.remove({ _id: id});
}

module.exports = {
    getTodos,
    saveTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}

