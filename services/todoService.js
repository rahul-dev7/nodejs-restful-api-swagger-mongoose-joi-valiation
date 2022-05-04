const Todo = require('../model/todo');

getTodos = () => {
    return  Todo.find({}).exec();
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
   let newTodo = new Todo(data);

    return Todo.updateOne(
        { _id: id },
        { $set: data },
        { upsert: true }
    ); 
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

